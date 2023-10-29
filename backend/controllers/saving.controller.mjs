import Saving from "../models/saving.module.mjs";

export const addSaving = async (savingData) => {
  try {
    const newSaving = new Saving(savingData);
    const savingAdded = await newSaving.save();
    if (savingAdded) {
      return { success: true, data: savingAdded, error: null };
    } else {
      return { success: false, data: null, error: "unable to add saving" };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getSingleSaving = async (savingId) => {
  try {
    const savingFound = await Saving.findOne({ _id: savingId });
    if (savingFound) {
      return { success: true, data: savingFound, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to find single saving",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getAllSaving = async () => {
  try {
    const savingsFound = await Saving.find({});
    if (savingsFound) {
      return { success: true, data: savingsFound, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to find savings",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
