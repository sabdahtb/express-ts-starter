<div align="center">
  <h1>Learn MENN Server</h1>

  <p>Server for MENN with NodeJS, Express, MongoDB and TypeScript</p>
</div>

<br />

# Table of Contents

- [About the Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  - [Run Locally](#run-locally)
  - [Run with Docker](#run-with-docker)

## About the Project

### Tech Stack

- **_Express.js_**
- **_Typescript_**

### Features

- **_Package managament_** with NPM
- **_Cross-Origin Resource-Sharing_** enabled using cors
- **_Secured HTTP Headers_** using helmet
- **_Logging_** with winston
- **_Environment variables_** using dotenv
- **_Linting and enforced code style_** using Eslint and Prettier
- **_Containerization_** with Docker

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

See .env.example for further details

## Getting Started

### Run Locally

Start the server in development mode

```bash
  npm install
  npm run dev
```

Start the server in production mode

```bash
  npm install
  npm start
```

### Run with Docker

Build the container

```bash
  docker build . -t learn-menn-server
```

Start the container

```bash
  docker run -p <port you want the container to run at>:8000 -d learn-menn-server
```
