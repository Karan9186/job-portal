import { Job } from "../models/jobs.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      experienceLevel,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const user = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !experienceLevel ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all fields", success: false });
    }
    const job = new Job({
      title: title,
      description: description,
      requirements: requirements,
      salary: Number(salary),
      experienceLevel: experienceLevel,
      location: location,
      jobType: jobType,
      position: position,
      company: companyId,
      createdBy: req.id,
    });
    job
      .save()
      .then((doc) => {
        return res.status(200).json({
          message: "new job created",
          job,
          success: true,
        });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ message: "Please fill in all fields", success: false });
      });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [{ title: { $regex: keyword, $options: "i" } }],
      $or: [{ description: { $regex: keyword, $options: "i" } }],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .populate({
        path: "createdBy",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate({
        path: "company",
      })
      .populate({
        path: "createdBy",
      });
    if (!job) {
      return res.status(404).json({
        message: "not found any job",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminJob = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({createdBy:adminId});
    if (!jobs) {
      return res.status(404).json({
        message: "no any jobs posted by you",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
