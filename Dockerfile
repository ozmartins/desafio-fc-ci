FROM node:18-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY ./package*.json /app

RUN npm install --ignore-scripts

USER node

COPY ./src/* /app/src/

ENTRYPOINT ["node", "./src/triangle.js"]

CMD ["help"]