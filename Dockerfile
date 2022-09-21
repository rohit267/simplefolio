FROM node:16-alpine

WORKDIR /app

COPY dist/ .
COPY app.js .
COPY package.json .

RUN npm install --omit=dev

CMD [ "npm", "run", "start" ]

EXPOSE 3001
