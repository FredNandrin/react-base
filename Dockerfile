FROM node:14

WORKDIR /usr/src/app

COPY server .

RUN yarn install

COPY build public
EXPOSE 8080
CMD [ "node", "server.js" ]