# This will run as a Docker ENTRYPOINT aka gets run after mongo starts

# Mongo command
# user and password are based from the docker-compose.yml
mongo nodeChat /app/create-user.js -u root -p root --authenticationDatabase admin

