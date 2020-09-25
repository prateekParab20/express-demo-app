FROM node:12

WORKDIR /../../express-demo-app

COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]

COPY . .

