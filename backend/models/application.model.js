import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      require: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    status: {
      type: String,
      enum: ["panding", "accepted", "rejected"],
      default: "panding",
    },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
