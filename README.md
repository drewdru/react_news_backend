# expressjs-rest-template

expressjs-rest-template

### Prerequisites

- [Docker (at least 1.10)](https://www.docker.com/)
- [Docker-compose (at least 1.6)](https://docs.docker.com/compose/install/)

## Getting Started

To get up and running on local, simply do the following:
### create .env file
    $ cp .env.example .env
### build docker images
    $ docker-compose build
### run app
    $ docker-compose up
### create superuser
    sudo docker-compose exec backend npm run db

## Deployment

ssh to server

    $ cd ~/expressjs-rest-template
    $ git pull origin develop
    $ docker-compose -f docker-compose.dev.yml build
    $ docker-compose -f docker-compose.dev.yml up -d
