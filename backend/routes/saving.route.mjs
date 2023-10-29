import express from "express";
import {
  addSaving,
  getAllSaving,
  getSingleSaving,
} from "../controllers/saving.controller.mjs";

const savingRouter = express.Router();

savingRouter.get("/", async (req, res) => {
  try {
    const { data, success, error } = await getAllSaving();
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

savingRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data, success, error } = await getSingleSaving(id);
    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

savingRouter.post("/", async (req, res) => {
  try {
    const newSavingData = req.body;
    const { data, success, error } = await addSaving(newSavingData);

    if (success) {
      res.status(200).json({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

export default savingRouter;
