wget -q https://raw.githubusercontent.com/bryht/Playground/master/docker-compose.yml -O docker-compose.yml
wget -q https://raw.githubusercontent.com/bryht/Playground/master/data/nginx/app.conf -O data/nginx/app.conf

docker-compose pull

docker-compose up -d

docker rmi $(docker images -f "dangling=true" -q)