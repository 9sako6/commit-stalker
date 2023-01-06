FROM node:18.4.0-buster-slim

RUN apt-get update -y \
  && mkdir -p /usr/share/man/man1 \
  && apt-get install -y curl openjdk-11-jre-headless \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g firebase-tools pnpm

WORKDIR /app

EXPOSE 4000
EXPOSE 9099

COPY . /app/
RUN pnpm i
