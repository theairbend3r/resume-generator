const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const pdf = require("html-pdf");
const pdfTemplate = require("./templates");
const fs = require("fs");

app.get("/check", (req, res) => {
  return res.status(200).send({
    message: "Server up and running succesfully",
  });
});

app.post("/create-resume", (req, res) => {
  console.log(req.body);
  pdf.create(pdfTemplate(req.body), {}).toStream((err, stream) => {
    if (err)
      return res
        .status(500)
        .send({ errorMessage: "an error occurred while creating the resume!" });
    res.writeHead(200, {
      "Content-Type": "application/force-download",
      "Content-disposition": "attachment; filename=Resume.pdf",
    });
    stream.pipe(res);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server running on https://localhost:${process.env.PORT || 3000}`
  );
});
