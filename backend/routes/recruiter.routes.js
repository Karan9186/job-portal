import express from "express";

import iAuthentication from "../middlewares/isAuthentication.js";
import {
  login,
  logOUt,
  register,
  updateProfile,
} from "../controllers/recruiter.controller.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logOUt);
router.route("/profile/update").post(iAuthentication, updateProfile);
export default router;
