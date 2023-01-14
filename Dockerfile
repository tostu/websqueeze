FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

ADD package.json /app

RUN pnpm i --silent

ADD . /app

RUN pnpm run build 
