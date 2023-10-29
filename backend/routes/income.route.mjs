import express from "express";
import {
  addIncome,
  getAllIncome,
  getSingleIncome,
} from "../controllers/income.controller.mjs";

const incomeRouter = express.Router();

incomeRouter.get("/", async (req, res) => {
  try {
    const { data, success, error } = await getAllIncome();
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

incomeRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data, success, error } = await getSingleIncome(id);
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

incomeRouter.post("/", async (req, res) => {
  try {
    const newIncomeData = req.body;
    const { data, success, error } = await addIncome(newIncomeData);
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

export default incomeRouter;
