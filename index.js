const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/topCars", (req, res) => {
  res.json(["Audi", "BMW", "Porsche", "Benz"]);
});

app.listen(1111, () => {
  console.log("Listening to port 1111");
});
