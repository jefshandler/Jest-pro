const request = require("supertest");
//importando a aplicacao
const app = require("../../src/app");
const { User } = require ("../../src/app/models");
//importa o comando pra limpar a base
const truncate = require("../utils/truncate");

describe("Autentication", () => {
    //metodos
    beforeEach(async () => {
        await truncate();
    });
    it("Autenticar com credenciais validas", async () => {
        const user = await User.create({
            name: "Diegoqa",
            email: "diego@dd.com",
            password_hash: "123456789"
        });
        //para testar uma rota no jest temos que instalar uma biblioteca supertest
        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123456788"
            });

        expect(response.status).toBe(200);
    })
    it("Autenticar com credenciais validas", async () => {
        const user = await User.create({
            name: "Diego",
            email: "diego@dd.com",
            password_hash: "123456"
        });
        //para testar uma rota no jest temos que instalar uma biblioteca supertest
        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "1234561"
            });

        expect(response.status).toBe(401);
    })
})