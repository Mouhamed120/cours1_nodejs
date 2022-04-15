const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/cours_1")
  .then(console.log("Connection à la base de donnée reussi"))
  .catch((error) => {
    console.log(error.message);
  });
