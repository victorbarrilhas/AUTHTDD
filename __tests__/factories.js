const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: "Victor",
  email: "victor@example.com",
  password: "123456",
});

module.exports = factory;
