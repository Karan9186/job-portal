import express from "express";
import iAuthentication from "../middlewares/isAuthentication.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  getAllCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { upload } from "../middlewares/multer.js";
const router = express.Router();

router
  .route("/registercompany")
  .post(upload.single("file"), iAuthentication, registerCompany);
router.route("/get").get(iAuthentication, getCompany);
router.route("/get/all").get(getAllCompany);
router.route("/get/:id").get(iAuthentication, getCompanyById);
router
  .route("/update/:id")
  .post(upload.single("file"), iAuthentication, updateCompany);

export default router;
