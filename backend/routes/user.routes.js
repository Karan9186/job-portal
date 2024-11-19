import express from "express";
import {
  login,
  logOUt,
  register,
  updateProfile,
  forgotPassUser,
  finalPassWordChanged,
} from "../controllers/user.controller.js";

import { singleUpload } from "../middlewares/multer.js";
import iAuthentication from "../middlewares/isAuthentication.js";
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/forgotpass").post(forgotPassUser);
router.route("/forgotpassfinal").post(finalPassWordChanged);
router.route("/logout").get(logOUt);
router
  .route("/profile/update")
  .post(singleUpload, iAuthentication, updateProfile);
export default router;
