import express from "express";
import {
  login,
  logOUt,
  register,
  updateProfile,
  forgotPassUser,
  finalPassWordChanged,
} from "../controllers/user.controller.js";
import { uploadFile } from "../middlewares/multer.js";
import iAuthentication from "../middlewares/isAuthentication.js";
const router = express.Router();

router.route("/register").post(uploadFile, register);
router.route("/login").post(login);
router.route("/forgotpass").post(forgotPassUser);
router.route("/forgotpassfinal").post(finalPassWordChanged);
router.route("/logout").get(logOUt);
router
  .route("/profile/update")
  .post(uploadFile, iAuthentication, updateProfile);
export default router;
