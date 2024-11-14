import mongoose, { mongo } from "mongoose";
const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, require: true },
    description: { type: String },
    website: { type: String },
    location: { type: String },
    file: { type: String }, //URL of logo
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const company = mongoose.model("Company", companySchema);
