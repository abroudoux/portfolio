
FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=

EXPOSE 5174

CMD [ "npm", "run", "dev" ]

