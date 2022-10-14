# AUTHTDD

Login test project using JWT Token and PostgreSql DB.

## Getting Startted

Follow this instructions to get a copy of this project in your local env to develop and test.

### Tools
- [NodeJs](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [PostgreSql](https://hub.docker.com/_/postgres)

## Installing Dependencies

After clone this repo, is recommended to use [Yarn](https://yarnpkg.com/). To install it:
```shell
npm install -g yarn
``` 

Then, install project dependencies:
```shell
yarn
``` 

## Running the application

With the dependencies installed, run the migrations with:
```shell
yarn sequelize db:migrate
``` 

Then, run the application:
```shell
yarn start
``` 

## Running Tests

To run the tests:
```shell
yarn test
``` 
