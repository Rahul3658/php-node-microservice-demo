# PHP + Node.js Microservice Demo

This project demonstrates a simple microservice architecture using:

* PHP (Frontend)
* Node.js + Express (Backend API)
* MySQL (Database)
* Docker & Docker Compose

## Architecture

Browser → PHP Frontend → Node API → MySQL Database

## Requirements

* Docker
* Docker Compose

## Run the project

```bash
docker compose up --build
```

## Access

Open browser:

http://localhost:8080

## Services

| Service      | Port |
| ------------ | ---- |
| PHP Frontend | 8080 |
| Node API     | 3000 |
| MySQL        | 3306 |

## API Endpoint

GET /users

Returns list of users from MySQL.

## Tech Stack

* PHP 8
* Node.js
* Express.js
* MySQL
* Docker

## Author

Demo microservice architecture project.
