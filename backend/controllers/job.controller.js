import { json } from "express";
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
      company,
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
      !position ||
      !company
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
      company: company,
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

    let word = {};
    try {
      // Only attempt to parse if `keyword` is a non-empty string
      if (keyword) {
        word = JSON.parse(keyword);
        console.log("the word=", word);
      }
    } catch (parseError) {
      // Handle the case when JSON parsing fails
      console.error("Error parsing keyword:", parseError);
      return res.status(400).json({
        message: "Invalid JSON format for keyword parameter",
        success: false,
      });
    }

    let query = {};

    // Ensure `word` has valid properties before using them
    if (word.key && word.value) {
      if (word.key === "experienceLevel") {
        query = {
          $or: [{ experienceLevel: { $lt: Number(word.value) } }],
        };
      }
      if (word.key === "jobType") {
        query = {
          $or: [{ jobType: { $regex: String(word.value), $options: "i" } }],
        };
      }
      if (word.key === "salary") {
        query = {
          $or: [{ salary: { $lt: Number(word.value) } }],
        };
      }
      if (word.key === "title") {
        query = {
          $or: [{ title: { $regex: String(word.value) } }],
        };
      }
    }

    // Find jobs based on the query
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .populate({
        path: "application",
      })
      .populate({
        path: "createdBy",
      })
      .sort({ createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
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
      })
      .populate({
        path: "application",
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
    const jobs = await Job.find({ createdBy: adminId })
      .populate("company")
      .exec();
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

export const updateJobById = async (req, res) => {
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
      company,
    } = req.body;

    const updateData = {
      title,
      description,
      requirements,
      salary,
      experienceLevel,
      location,
      jobType,
      experience,
      position,
      company,
    };
    const jobUpd = await Job.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!jobUpd) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "job information updated",
      jobUpd,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
