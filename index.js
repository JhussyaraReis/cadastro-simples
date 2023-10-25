const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

//Configurações
//Template engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//conexão com o banco de dados mysql
const sequelize = new Sequelize("pessoas", "root", "cri2[9/LilloutBiz", {
  host: "localhost",
  dialect: "mysql",
});

//Rotas
app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  res.send("formulario enviado");
});

app.listen(8081, function () {
  console.log("Servidor Rodando");
});
