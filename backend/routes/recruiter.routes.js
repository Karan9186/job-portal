import express from "express";

import iAuthentication from "../middlewares/isAuthentication.js";
import {
  finalPassWordChanged,
  forgotPassUser,
  login,
  logOUt,
  register,
  updateProfile,
} from "../controllers/recruiter.controller.js";
import { upload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(upload.single("file"), register);
router.route("/login").post(login);
router.route("/logout").get(logOUt);

router.route("/forgotpass").post(forgotPassUser);
router.route("/forgotpassfinal").post(finalPassWordChanged);
router
  .route("/profile/update")
  .post(upload.single("file"), iAuthentication, updateProfile);
export default router;
