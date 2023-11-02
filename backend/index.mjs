import express from "express";
import incomeRouter from "./routes/income.route.mjs";
import expenseRouter from "./routes/expense.route.mjs";
import savingRouter from "./routes/saving.route.mjs";
import { dbConnect } from "./db/db.connect.mjs";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});
dbConnect();

app.use("/income", incomeRouter);
app.use("/expense", expenseRouter);
app.use("/saving", savingRouter);
app.get("/", (req, res) => {
  res.send("finance management app");
});

const PORT = process.env["PORT"] || 3002;

app.listen(PORT, () => {
  console.log(`listening to server at port ${PORT}`);
});
