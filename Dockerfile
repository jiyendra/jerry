FROM node:12

WORKDIR /app

COPY package.json /app

RUN npm install && npm run build 

RUN chmod 775 build

COPY . /app

USER node 

EXPOSE 80

CMD ["node", "server.js"]
