FROM node:20.1.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY public .

EXPOSE 80

CMD ["node", "build/server.js"]
