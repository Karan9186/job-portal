import { company } from "../models/company.model.js";

import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName, description, location } = req.body;
    console.log(req.body);
    if (!companyName) {
      return res.status(400).json({
        message: "copmany name is require",
        success: false,
      });
    }

    // Handle file upload to Cloudinary
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        message: "No file uploaded",
        success: false,
      });
    }

    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    // done file
    let Company = await company.findOne({ name: companyName });
    if (Company) {
      return res.status(400).json({
        message: "you can't register same company",
        success: false,
      });
    }
    console.log(req.id);

    Company = await company.create({
      companyName: companyName,
      description: description,
      location: location,
      file: cloudResponse.secure_url,
      userId: req.id,
    });
    console.log("the copnay is=", Company);

    return res.status(201).json({
      message: "compay created",
      Company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //loged in user id
    const companise = await company.find({ userId });
    if (!companise) {
      return res.status(400).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      companise,
      message: "compmay found",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllCompany = async (req, res) => {
  try {
    const companise = await company.find();
    if (!companise) {
      return res.status(400).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      companise,
      message: "compmay found",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const compnay = await company.findById(companyId);
    if (!compnay) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      compnay,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { companyName, description, website, location } = req.body;
    const file = req.file;
    // cloudary here

    // end
    const updateData = { companyName, description, website, location };

    const Company = await company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!Company) {
      return res.status(404).json({
        message: "compnay not found",
        success: true,
      });
    }
    return res.status(200).json({
      message: "company information updated",
      Company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
