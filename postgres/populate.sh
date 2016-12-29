#!/bin/bash

docker exec -it 2dv513assignment3_db_1 psql -U postgres -f /src/tables.sql
docker exec -it 2dv513assignment3_db_1 psql -U postgres -f /src/populate.sql
