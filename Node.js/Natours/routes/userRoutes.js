const express = require("express");
const fs = require("fs");
const userControler = require("../controler/userControler");

const route = express.Router();

route.route("/").get(userControler.getAllUsers).post(userControler.createUser);

route
  .route("/:id")
  .get(userControler.getUser)
  .patch(userControler.updateUser)
  .delete(userControler.deleteUser);

module.exports = route;
