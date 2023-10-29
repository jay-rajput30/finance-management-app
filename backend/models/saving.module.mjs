import mongoose from "mongoose";

const savingSchema = mongoose.Schema(
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

const Saving = mongoose.model("Saving", savingSchema);

export default Saving;
