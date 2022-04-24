const { User } = require("../../src/app/models");
describe("Criar usuário", () => {
    it("Criar", async  () => {
        const user = await User.create({
            name: "TesteqaCreate",
            email: "bbbb@nn.com",
            password_hash: "123123123"
        });
        console.log(user);
        expect(user.email).toBe("bbbb@nn.com");
    });
});