const express = require("express");
const { router } = require("./routes/main.routes");
const app = express();
const port = 3000;

// routes
app.use(require("./routes/main.routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
