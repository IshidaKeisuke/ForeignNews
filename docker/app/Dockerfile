FROM node:latest
WORKDIR /app

COPY package*.json ./

RUN npm i @nestjs/cli@7.6.0 -g

COPY . .

CMD ["npm", "run", "start:dev"]
