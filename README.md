# GraphQL_study

docker build --tag graph .

docker run -p 4000:8080 --rm --name graphql graph 

docker exec -it graphql /bin/sh