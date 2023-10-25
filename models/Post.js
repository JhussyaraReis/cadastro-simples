const db = require("./db");

const Post = db.sequelize.define("postagens", {
  titulo: {
    type: db.Sequelize.String,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
});

Post.sync({ force: true });
