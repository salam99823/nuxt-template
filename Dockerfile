FROM docker.io/oven/bun:1-alpine AS base
WORKDIR /usr/src/app
RUN apk --no-cache add openssh g++ make python3 git

FROM base AS install
COPY package.json bun.lock /temp/
WORKDIR /temp
RUN bun install --frozen-lockfile -p

FROM install AS prerelease
WORKDIR /usr/src/app
COPY --from=install /temp/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --chown=bun:bun --from=install /temp/node_modules node_modules
COPY --chown=bun:bun --from=prerelease /usr/src/app/.output .

USER bun
ENV HOST 0.0.0.0
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
