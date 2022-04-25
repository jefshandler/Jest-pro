const bcrypt = require("bcryptjs");
const { User } = require("../../src/app/models");

const trucate = require("../utils/truncate");

//descrever
describe("User",  () => {
    beforeEach(async () => {
        await trucate();
    });
    it('should  encrypt user password', async () => {
       const user = await User.create({
           name: "TestUnitQA",
           email: "teste1@bbb.com",
           password: "123456789"
       });
       //criar uma variavel para receber o hash de senha
       // const hash = await bcrypt.hash("123456789", 8);
       //
       // expect(user.password_hash).toBe(hash);
        const compareHash =await bcrypt.compare("123456789", user.password_hash);

        expect(compareHash).toBe(true);

    });
});