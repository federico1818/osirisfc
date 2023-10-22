#!/bin/bash

case $1 in

    up)
        docker compose -f ./docker/docker-compose.yml up --detach
    ;;

    down)
        docker compose -f ./docker/docker-compose.yml down
    ;;

    *)
        echo -n "unknown"
    ;;
esac
