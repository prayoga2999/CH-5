const express = require("express");
const app = express();
const { routeUsers } = require("./Users/userRouter");
const port = 8002;

app.use(express.json());

app.use(express.static(__dirname + "/public/CH3"));
app.use(express.static(__dirname + "/public/CH4"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("ch3/index");
});

app.get("/game", (req, res) => {
  res.render("ch4/index");
});

app.use(routeUsers);

app.listen(port, () => console.log("server is running on port:" + port));
