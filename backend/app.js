const express = require("express");
const app = express();

app.get("/check", (req, res) => {
  return res.status(200).send({
    message: "Server up and running succesfully",
  });
});

app.post("/create-resume", (req, res) => {
  console.log(req.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server running on https://localhost:${process.env.PORT || 3000}`
  );
});
