const routes = require("express").Router();
const { User } = require("./app/models");

// const { User } =require("./app/models");
//
User.create({
    name: "Noah",
    email: "noah@b.com",
    password_hash: "123654789"
});
module.exports = routes;
//definir rotas
// routes.post("/sessions", (req, res) => {
//colocar a rota de autenticação
// })
//routes.post("/sessions", SessionController.store);