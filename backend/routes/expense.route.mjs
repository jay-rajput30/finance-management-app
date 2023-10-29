import express from "express";
import {
  addExpense,
  getAllExpense,
  getSingleExpense,
} from "../controllers/expense.controller.mjs";

const expenseRouter = express.Router();

expenseRouter.get("/", async (req, res) => {
  try {
    const { data, success, error } = await getAllExpense();
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

expenseRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data, success, error } = await getSingleExpense(id);
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

expenseRouter.post("/", async (req, res) => {
  try {
    const newExpenseData = req.body;
    const { data, success, error } = await addExpense(newExpenseData);
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

export default expenseRouter;
