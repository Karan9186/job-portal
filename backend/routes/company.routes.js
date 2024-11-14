import express from "express";
import iAuthentication from "../middlewares/isAuthentication.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
const router = express.Router();

router.route("/registercompany").post(iAuthentication, registerCompany);
router.route("/get").get(getCompany);
router.route("/get/:id").get(iAuthentication, getCompanyById);
router.route("/update/:id").post(iAuthentication, updateCompany);

export default router;
