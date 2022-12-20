const express = require("express");
const app = express();
const PORT = 3000;

app.get("/product", function (req, res) {
  res.send({
    message: "Init Test",
    data: "ABBBBB",
  });
});

app.listen(PORT, () => {
  console.log("Server Running on");
});
