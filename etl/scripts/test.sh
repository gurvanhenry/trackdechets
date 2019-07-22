#!/bin/bash

container=$(docker ps -aqf "name=td-etl")

# create test database
docker exec -e AIRFLOW__CORE__LOGGING_LEVEL=INFO $container airflow test $1 $2 `date +%Y%m%d`