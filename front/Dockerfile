FROM node:lts-bullseye-slim

WORKDIR /front

COPY package.json .

COPY package-lock.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "nodemon", "--exec", "npm", "start" ]


