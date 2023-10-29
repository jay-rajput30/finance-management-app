import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("finance management app");
});

const PORT = process.env["PORT"] || 3002;

app.listen(PORT, () => {
  console.log(`listening to server at port ${PORT}`);
});
