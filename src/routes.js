const routes = require("express").Router();
// importar o session clontroler


const { User } =require("./app/models");

User.create({
    name: "Noah1",
    email: "noah1@b.com",
    password_hash: "123654789"
});
//definir rotas
// routes.post("/sessions", (req, res) => {
    //colocar a rota de autenticação
// })


module.exports = routes;