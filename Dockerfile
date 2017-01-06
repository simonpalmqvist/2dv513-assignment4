FROM nodesource/node:latest

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
COPY package.json /src/package.json
COPY mongodb/wait-for-it.sh /src/
RUN chmod 777 wait-for-it.sh
RUN npm install

EXPOSE 3000

CMD ["./wait-for-it.sh", "db:27017", "--", "npm", "start"]
