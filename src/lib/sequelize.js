const { Sequelize  } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "test",
  "root",
  "alicepassword",
  {
    host: 'localhost',
    dialect: 'mysql',
        timezone: '-04:00', //for writting from database
    dialectOptions: {
      options: {
       // useUTC: false, //for reading from database
        encrypt: false,
      },
    },
  }
);

//setupModels(sequelize);
//sequelize.sync();

module.exports = sequelize;