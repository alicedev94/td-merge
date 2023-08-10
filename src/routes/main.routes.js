const router = require("express").Router();
const passport = require("passport");
const { getData } = require("../controllers/main.controller");

// GET
router.get("/", async (req, res) => {
  res.render("Login");
});

// POST
router.post(
  "/profile",
  passport.authenticate("JwtStrategy", { session: false }),
  function (req, res) {
    res.send(req.user.profile);
  }
);
module.exports = router;
