FROM node:16.14.2-alpine
EXPOSE 3333
WORKDIR /app

RUN apk update && \
    apk upgrade

CMD ["npm", "run", "dev"]
