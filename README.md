# Assignment 4 – 2dv513

## Start
```
#Start application and database
docker-compose up --build

#Create tables and populate database
./postgres/populate.sh

#Access database from terminal
docker exec -it 2dv513assignment3_db_1 psql -U postgres
```

App should be available at http://localhost:3000
