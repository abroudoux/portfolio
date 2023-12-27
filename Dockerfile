
FROM ubi9/nodejs-18

WORKDIR /dist

COPY /dist /dist

EXPOSE 5173

CMD [ "npm", "run", "prod" ]

