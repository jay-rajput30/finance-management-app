import Income from "../models/income.model.mjs";
import { CATEGORIES } from "../utils/finance.categories.util.mjs";

export const addIncome = async (incomeData) => {
  try {
    const newIncome = new Income(incomeData);

    const categoryFound = CATEGORIES.find(
      (item) => item === incomeData.category
    );
    if (categoryFound) {
      const incomeAdded = await newIncome.save();
      if (incomeAdded) {
        return { success: true, data: incomeAdded, error: null };
      }
    } else {
      return { success: false, data: null, error: "unable to add income" };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getSingleIncome = async (incomeId) => {
  try {
    const incomeFound = await Income.findOne({ _id: incomeId });
    if (incomeFound) {
      return { success: true, data: incomeFound, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to find single income",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getAllIncome = async () => {
  try {
    const incomesFound = await Income.find({});
    if (incomesFound) {
      return { success: true, data: incomesFound, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to find incomes",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
