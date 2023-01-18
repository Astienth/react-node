FROM node:alpine

WORKDIR /front

COPY package.json .

COPY package-lock.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]


