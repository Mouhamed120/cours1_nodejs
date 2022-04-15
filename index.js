const express = require("express");

const app = express();
app.use(express());
const resultat = app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(resultat);

app.listen(8000, () => {
  console.log("backend is running on port 8000");
});
