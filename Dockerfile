FROM nodesource/node:latest

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
COPY package.json /src/package.json
RUN npm install

EXPOSE 3000

CMD ["npm","run","watch"]
