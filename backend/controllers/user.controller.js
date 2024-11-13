import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import getDataUri from "../utils/datauri.js";
import { singleUpload } from "../middlewares/multer.js";
import cloudinary from "../utils/cloudinary.js";
import { log } from "console";
export const register = async (req, res) => {
  // Apply multer middleware before this function is executed

  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
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

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists with the same email",
        success: false,
      });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create the new user
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPass,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });

    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "incorect email or password",
        success: false,
      });
    }
    const passMached = await bcrypt.compare(password, user.password);
    if (!passMached) {
      return res.status(400).json({
        message: "incorect email or password",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "accound does't not exist with current role",
        success: false,
      });
    }
    user = {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
      role: user.role,
      phoneNumber: user.phoneNumber,
      profile: user.profile,
    };
    const tokendata = {
      userId: user._id,
    };
    const token = await jwt.sign(tokendata, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `welcome back ${user.fullname}`,
        success: true,
        user,
      });
  } catch (err) {
    console.log(err);
  }
};

export const logOUt = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout successfully",
      success: true,
    });
  } catch (err) {
    res.status(401).json({ err: err });
    console.log(err);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    // cloundynary here

    // end cloundary
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id; //middleware authentication
    console.log(req.id);
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }
    // updatin data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;
    await user.save();
    console.log("done");

    user = {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
      role: user.role,
      phoneNumber: user.phoneNumber,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "profile updated",
      user,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
