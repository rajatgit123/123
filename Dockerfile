FROM node:8

RUN mkdir app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
