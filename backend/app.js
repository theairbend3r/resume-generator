const express = require("express");
const app = express();

app.get("/check", (req, res) => {
  return res.status(200).send({
    message: "Server up and running succesfully",
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running on https://localhost:${process.env.PORT || 5000}`
  );
});
