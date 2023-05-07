FROM node:18-alpine

WORKDIR /api

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn prisma generate

RUN yarn build

CMD [ "node", "dist/main.js" ]
