docker run \
    --name postgre \
    -p 5432:5432 \
    -d \
    postgre:4

    docker ps
    docker stop

    docker exec -it postgre_dev postgres

    #app
    docker build -t app api-book-hotel

    docker run \
        --name app \
        --link postgres \
        -e POSTGRES_URL=postgres \
        -e PORT=4000 \
        -p 4000:4000 \
        app