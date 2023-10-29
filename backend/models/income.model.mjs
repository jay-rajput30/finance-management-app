import mongoose from "mongoose";

const incomeSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", incomeSchema);

export default Income;
