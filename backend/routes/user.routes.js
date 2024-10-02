import express from "express";
import {
  login,
  logOUt,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import iAuthentication from "../middlewares/isAuthentication.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logOUt);
router.route("/profile/update").post(iAuthentication, updateProfile);
export default router;
