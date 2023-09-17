FROM node:18-alpine

WORKDIR /learn/work/server

COPY . /learn/work/server

RUN npm install

EXPOSE 8000

ENV NODE_ENV production

CMD ["npm", "run", "start"]