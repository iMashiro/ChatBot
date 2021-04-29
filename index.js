const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const data = require("./services/service");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Main");
});

app.get("/gitData", async (req, res) => {
  const MyData = await data.getData()
  return res.send(MyData)
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running in http://localhost:${port}`);
});
