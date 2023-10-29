import Expense from "../models/expense.model.mjs";

export const addExpense = async (expenseData) => {
  try {
    const newExpense = new Expense(expenseData);
    const expenseAdded = await newExpense.save();
    if (expenseAdded) {
      return { success: true, data: expenseAdded, error: null };
    } else {
      return { success: false, data: null, error: "unable to add expense" };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getSingleExpense = async (expenseId) => {
  try {
    const expenseFound = await Expense.findOne({ _id: expenseId });
    if (expenseFound) {
      return { success: true, data: expenseFound, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to find single expense",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getAllExpense = async () => {
  try {
    const expenseFound = await Expense.find({});
    if (expenseFound) {
      return { success: true, data: expenseFound, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to find expenses",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
