FROM node:alpine

WORKDIR /api

COPY package.json .

COPY package-lock.json .

RUN npm install

EXPOSE 4000

COPY . .

CMD [ "npm", "start" ]


