const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Victor",
  email: "victor@teste.com.br",
  password_hash: "20032302",
});

module.exports = routes;
