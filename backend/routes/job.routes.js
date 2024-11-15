import express from "express";
import iAuthentication from "../middlewares/isAuthentication.js";
import {
  getAdminJob,
  getAllJobs,
  getJobById,
  postJob,
  updateJobById,
} from "../controllers/job.controller.js";
const router = express.Router();

router.route("/postjob").post(iAuthentication, postJob);
router.route("/getalljobs").get(getAllJobs);
router.route("/get/:id").get(iAuthentication, getJobById);
router.route("/adminjob").get(iAuthentication, getAdminJob);
router.route("/update/:id").post(iAuthentication, updateJobById);
export default router;
