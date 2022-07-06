const express = require("express");
const { routeUsers } = require("./Users/userRouter");
const app = express();
const port = 8002;

app.use(express.json());

app.use(express.static("Public"));
app.use(express.static(__dirname + "/Public/CH3"));
app.use(express.static(__dirname + "/Public/CH4"));
app.set("view engine", "html");

app.set("views", "/views");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("index2");
});

app.use(routeUsers);

app.listen(port, () => console.log("server is running on port:" + port));
