const sequelize = require("../lib/sequelize");

// GET INFORMATION
const getData = async () => {
  const rta = await sequelize.query(`
  SELECT * FROM first_table`);
  return rta;
};

module.exports = {
  getData,
};
