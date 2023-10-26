# blog-com-node

Esse é um projeto de um cadastro simples criado com node.js

Para iniciar o projeto é preciso criar o arquivo db.js dentro da pasta models com as configurações do seu banco de dados:

const Sequelize = require("sequelize");

//conexão com o banco de dados mysql
const sequelize = new Sequelize("nomeDoBanco", "usuario", "senha", {
host: "localhost",
dialect: "mysql",
});

module.exports = {
Sequelize: Sequelize,
sequelize: sequelize,
};
