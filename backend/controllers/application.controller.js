import { Application } from "../models/application.model.js";
import { Job } from "../models/jobs.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "job id is require",
        success: false,
      });
    }
    // user hash already aply checking here
    const existingApply = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApply) {
      return res.status(400).json({
        message: "you already apply this job",
        success: false,
      });
    }
    // if not
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    // create a new application
    const newapplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.application.push(newapplication._id);
    await job.save();
    return res.status(200).json({
      message: "job applied successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(400).json({
        message: "no applications",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: {
        sort: { createdAt: -1 },
      },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "job not found",
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

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(404).json({
        message: "status require",
        success: false,
      });
    }
    // find application with applicant id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    // update status
    application.status = status;
    await application.save();
    return res.status(200).json({
      message: "status updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
