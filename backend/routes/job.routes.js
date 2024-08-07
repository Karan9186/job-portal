import express from "express";
import iAuthentication from "../middlewares/isAuthentication.js";
import {
  getAdminJob,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";
const router = express.Router();

router.route("/postjob").post(iAuthentication, postJob);
router.route("/getalljobs").get(iAuthentication, getAllJobs);
router.route("/get/:id").get(iAuthentication, getJobById);
router.route("/adminjob").get(iAuthentication, getAdminJob);

export default router;
