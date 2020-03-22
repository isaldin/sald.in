FROM node:12.14.0-alpine as build-env

WORKDIR /usr/src/app

COPY package.json .

ENV NODE_ENV=production
RUN yarn install --production=false
COPY . .
RUN yarn dist

FROM nginx:1.16.1-alpine
EXPOSE 80
COPY --from=build-env /usr/src/app/dist/ /usr/share/nginx/html