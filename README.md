# Assignment 4 – 2dv513

## Start
```
#Start application and database
docker-compose up --build

#Populate database
npm install mongodb
node mongodb/populate.js

#Access database from terminal
docker exec -it 2dv513assignment4_db_1 mongo
```

App should be available at http://localhost:3000
