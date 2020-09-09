FROM node:8.11.3

WORKDIR /app

COPY package.json /app

RUN npm install -g npm-check-updates
RUN ncu -u
RUN npm install

COPY . /app

CMD node app.js

EXPOSE 3002

