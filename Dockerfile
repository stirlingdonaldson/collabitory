FROM oven/bun:1 as base

WORKDIR /app

COPY . .

RUN bun install

ENV PORT=3000

EXPOSE 3000

CMD [ "bun", "run", "start"]
