#!/bin/bash -e

for i in $(docker ps -a |grep spark-postgres|awk '{print $1;}');do docker stop $i;done
for i in $(docker ps -a |grep spark-postgres|awk '{print $1;}');do docker rm $i;done

docker run --name spark-postgres -v /var/run/postgresql:/var/run/postgresql -e POSTGRES_DB=spark -p 0.0.0.0:5432:5432 -d postgres
# cat ./data/dump.sql | docker exec -i $(docker ps -a |grep spark-postgres|awk '{print $1;}') sh -c "psql -U postgres"
# psql -U postgres -d spark -c 'SELECT * FROM mytable'
docker exec -i $(docker ps -a |grep spark-postgres|awk '{print $1;}') sh -c "ls -an" > result.log

for i in $(docker ps -a |grep spark-postgres|awk '{print $1;}');do docker stop $i;done
for i in $(docker ps -a |grep spark-postgres|awk '{print $1;}');do docker rm $i;done





