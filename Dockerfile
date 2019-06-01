# Build front
FROM node:10
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
ENV PATH /usr/src/server/node_modules/.bin:$PATH

# npm
COPY package*.json /usr/src/server/
RUN npm ci

COPY ./server /usr/src/server

EXPOSE 3003
CMD ["node","/usr/src/server/index.js"]