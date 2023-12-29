
FROM ubi9/nodejs-18

WORKDIR /build

COPY /build /build

EXPOSE 5173

CMD [ "npm", "run", "prod" ]

