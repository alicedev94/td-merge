const router = require("express").Router();
const { getData } = require("../controllers/main.controller");

// GET
router.get("/", async (req, res) => {
  const rta = await getData();
  res.json(rta);
});

module.exports = router;
