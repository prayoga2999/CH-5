const express = require("express");
const utilUsers = require("../Users/userService");
const routeUsers = express.Router();

routeUsers.post("/login", (req, res) => {
  try {
    return utilUsers.login(req, res);
  } catch (error) {
    return res.send("Error");
  }
});

module.exports = { routeUsers };
