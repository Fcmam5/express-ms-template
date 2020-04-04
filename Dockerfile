FROM node:12-slim

USER node

ENV NODE_ENV production

WORKDIR /home/node


COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY . .

CMD ["npm","start"]

EXPOSE 3000
