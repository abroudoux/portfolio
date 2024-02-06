FROM node:21

WORKDIR /build

COPY /build /build

EXPOSE 3333

CMD [ "npm", "run", "prod" ]