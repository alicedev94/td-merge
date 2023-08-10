const sequelize = require("../lib/sequelize");

// GET INFORMATION
const getData = async () => {
  const rta = await sequelize.query(`
  SELECT * FROM first_table`);
  return rta;
};

const getUser = async (id) => {
  const rta = await sequelize.query(`
  SELECT * FROM first_table WHERE ID = '${id}'`);
  return rta;
};

module.exports = {
  getData,
  getUser
};
