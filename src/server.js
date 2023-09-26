const express = require("express");
const passport = require("passport");
const { router } = require("./routes/main.routes");
const engine = require("ejs-mate");
const path = require("path");
const app = express();
const port = 3000;

//middlewares
app.use(passport.initialize());
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(express.json());

// routes
app.use(require("./routes/main.routes"));

// public route
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
