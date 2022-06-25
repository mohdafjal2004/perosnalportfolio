const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.post("/send", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
