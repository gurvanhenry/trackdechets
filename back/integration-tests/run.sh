#!/bin/sh

export NODE_ENV=test
export API_HOST=api-td.local
export PRISMA_ENDPOINT=http://prisma:4467/default/staging
export PRISMA_SECRET=any_secret
export COMPOSE_PROJECT_NAME=integration

echo ">> Running integration test 🚀..."
echo ">> Starting containers..."
docker-compose up --build -d

echo ">> Deploy to prisma..."

docker exec -it $(docker ps -qf "name=td-api") bash /usr/src/app/integration-tests/wait-for-prisma.sh
docker exec -it $(docker ps -qf "name=td-api") npx prisma deploy
docker exec -it $(docker ps -qf "name=td-api") npx prisma reset --force

echo ">> Run tests..."
docker exec -it $(docker ps -qf "name=td-api") npx jest --config integration.jest.config.js  -i --forceExit --detectOpenHandles

echo ">> Stopping containers 🛏️ ..."

docker-compose stop

