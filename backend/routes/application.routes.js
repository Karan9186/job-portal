import express from "express";
import iAuthentication from "../middlewares/isAuthentication.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

router.route("/apply/:id").get(iAuthentication, applyJob);
router.route("/get").get(iAuthentication, getAppliedJobs);
router.route("/:id/applicants").get(iAuthentication, getApplicants);
router.route("/status/:id/update").post(iAuthentication, updateStatus);

export default router;
