const { User } = require("../../src/app/models");

describe("Criar usuário", () => {
    it('should sum',  async () => {
        const user = await User.create({
            name: "Qausuario",
            email: "qabb@bb.com",
            password_hash: "123456"
        });

        //console.log(user);

        expect(user.email).toBe("qabb@bb.com");

    });
});