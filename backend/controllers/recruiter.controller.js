import { Reqcuiter } from "../models/recruiter.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const user = await Reqcuiter.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Reqcuiter already exists with same email",
        success: false,
      });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    await Reqcuiter.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPass,
      role,
      profile: {},
    });
    return res.status(200).json({
      message: "account created successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
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
    let user = await Reqcuiter.findOne({ email });
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
    const { fullname, email, phoneNumber } = req.body;

    // cloundynary here

    // end cloundary

    const userId = req.id; //middleware authentication
    let user = await Reqcuiter.findById(userId);
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

    await user.save();

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
