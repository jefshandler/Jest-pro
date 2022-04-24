const request = require("supertest");

const app = require("../src/app");
const { User } = require("../src/app/models");

describe("Autenticar", () => {
    it("Autenticar com credenciais validas", async () => {
    const user = await User.create({
        name: "TesteqaCreate2",
        email: "bbbb2@nn.com",
        password_hash: "123123123"
    });
const response = await request(app)
    .post("/sessions")
    .send({
        email: user.email,
        password: "123456"
    });
expect(response.status).toBe(200);
    });
});
