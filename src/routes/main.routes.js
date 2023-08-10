const router = require("express").Router();
const passport = require("passport");
const { getData } = require("../controllers/main.controller");

// GET
router.get("/", async (req, res) => {
  res.render("Login");
});

router.get("/home", async (req, res) => {
  res.render("Home");
});

// POST
router.post(
  "/profile",
  // passport.authenticate("JwtStrategy", { session: false }),
  function (req, res) {
    //console.log(req.body);
    //res.redirect("/");
  }
);
module.exports = router;
