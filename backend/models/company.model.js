import mongoose, { mongo } from "mongoose";
const companySchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    website: { type: String },
    location: { type: String },
    logo: { type: String }, //URL of logo
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

export const company = mongoose.model("Company", companySchema);
