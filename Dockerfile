FROM node:15

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn

RUN yarn global add serve

RUN npm run build

CMD ["serve", "-s", "build"]
