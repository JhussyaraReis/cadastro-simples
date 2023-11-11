# Cadastro Simples

Esse é um projeto de um cadastro criado com node.js, mysql.

Para iniciar o projeto é preciso :

- [ ] criar o seu banco de dados;
- [ ] rodar o comando npm install na pasta do projeto;
- [ ] criar o arquivo db.js dentro da pasta models com as configurações abaixo:

```javascript
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
```

- [ ] rodar o arquivo Post.js para criar as tabelas do banco;
- [ ] rodar npm start;
- [ ] acessar no navegador o link http://127.0.0.1:[porta]/cad
