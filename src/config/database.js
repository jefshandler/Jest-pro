require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
module.exports = {
  // host: "127.0.0.1",
  // username: "root",
  // password: "root",
  // database: "_prod",
  // dialect: "mysql",
  // operatorAliases: false,
  // logging: false,
  // define: {
  //   timestamps: true,
  //   underscored: true,
  //   underscoredAll: true
  // }
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "mysql",
  //storage: './__tests__/database.sqlite',
  operationAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};








// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
