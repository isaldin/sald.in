FROM node:12.14.0-alpine as build-env

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json .
RUN yarn install --production=false

COPY . .
RUN yarn dist

FROM staticfloat/nginx-certbot as static-html
COPY --from=build-env /usr/src/app/dist/ /usr/share/nginx/html