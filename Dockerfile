FROM node:14-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/xavier/api
