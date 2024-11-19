import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import getDataUri from "../utils/datauri.js";
import { singleUpload } from "../middlewares/multer.js";
import cloudinary from "../utils/cloudinary.js";
import nodemailer from "nodemailer";

function generateSecurityCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
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

    // mail send
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "karanss652@gmail.com",
        pass: "mxbj gmmh rzrz jhmp",
      },
    });
    var mailOptions = {
      from: "karanss652@gmail.com",
      to: email,
      subject: "HireLink Confirmation Mail",
      html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        color: #333;
        padding: 20px;
      }
      .email-container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 0 auto;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header img {
        max-width: 150px;
      }
      .body {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .body h2 {
        color: red;
        font-size: 24px;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #888;
      }
      .footer a {
        color: red;
        text-decoration: none;
      }
      .button {
        display: inline-block;
        background-color: #4CAF50;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 30px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
      }
         .hirelink {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      .hirelink .insideHireLink{
        color:red
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
       <h1 class="hirelink"><span class="insideHireLink">Hire</span>Link</h1>
      </div>
      <div class="body">
        <h2>Thank You for register as Jobseeker</h2>
        <p>Dear ${fullname},</p>
        <p>We wanted to take a moment to personally thank you for registering. We truly appreciate your support and trust in HireLink.</p>
        <p>Your action means a lot to us, and we are excited to have you as a part of our community. If you have any questions or need assistance, please don’t hesitate to reach out. We’re here to help!</p>
        <p>Once again, thank you for your registering. We look forward to serving you and continuing to work together in the future.</p>
      </div>
      <div class="footer">
        <p>Best regards,</p>
        <p>Karan Parmar <br>
           HireLink <br>
        </p>
        <p>Follow us on <a href="https://www.linkedin.com/in/karan-parmar9186/">LinkedIn</a></p>
      </div>
    </div>
  </body>
  </html>
  `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // end

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
    const file = req.file;
    // if (!file) {
    //   return res.status(400).json({
    //     message: "No file uploaded",
    //     success: false,
    //   });
    // }
    let cloudResponse = "";
    if (file) {
      let fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    }

    // end cloundary
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",") || skills;
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
    if (file) user.profile.resume = cloudResponse.secure_url;
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

export const forgotPassUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "email is not found",
        success: false,
      });
    }
    let securityCode = generateSecurityCode(10);
    // mail send
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "karanss652@gmail.com",
        pass: "mxbj gmmh rzrz jhmp",
      },
    });
    var mailOptions = {
      from: "karanss652@gmail.com",
      to: email,
      subject: "HireLink OTP For Password Changed",
      html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        color: #333;
        padding: 20px;
      }
      .email-container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 0 auto;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header img {
        max-width: 150px;
      }
      .body {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .body h2 {
        color: red;
        font-size: 24px;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #888;
      }
      .footer a {
        color: red;
        text-decoration: none;
      }
      .button {
        display: inline-block;
        background-color: #4CAF50;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 30px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
      }
         .hirelink {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      .hirelink .insideHireLink{
        color:red
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
       <h1 class="hirelink"><span class="insideHireLink">Hire</span>Link</h1>
      </div>
      <div class="body">
        <h2>Your request for password change</h2>
        <p>Dear ${user.fullname},</p>
        <p>your request to change the password here is the your security code ${securityCode}</p>
      </div>
      <div class="footer">
        <p>Best regards,</p>
        <p>Karan Parmar <br>
           HireLink <br>
        </p>
        <p>Follow us on <a href="https://www.linkedin.com/in/karan-parmar9186/">LinkedIn</a></p>
      </div>
    </div>
  </body>
  </html>
  `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // end

    return res.status(200).json({
      message: "email found",
      success: true,
      user,
      securityCode,
    });
  } catch (err) {
    console.log(err);
  }
};

export const finalPassWordChanged = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide username, current password, and new password.",
      success: false,
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(password, salt);

    // Update the user's password in the database
    user.password = hashedNewPassword;
    await user.save();
    // mail send
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "karanss652@gmail.com",
        pass: "mxbj gmmh rzrz jhmp",
      },
    });
    var mailOptions = {
      from: "karanss652@gmail.com",
      to: email,
      subject: "HireLink Your Password Changed",
      html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        color: #333;
        padding: 20px;
      }
      .email-container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 0 auto;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header img {
        max-width: 150px;
      }
      .body {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .body h2 {
        color: red;
        font-size: 24px;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #888;
      }
      .footer a {
        color: red;
        text-decoration: none;
      }
      .button {
        display: inline-block;
        background-color: #4CAF50;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 30px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
      }
         .hirelink {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      .hirelink .insideHireLink{
        color:red
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
       <h1 class="hirelink"><span class="insideHireLink">Hire</span>Link</h1>
      </div>
      <div class="body">
        <h2>Your request for password change</h2>
        <p>Dear ${user.fullname},</p>
        <p>your password changed successfully</p>
      </div>
      <div class="footer">
        <p>Best regards,</p>
        <p>Karan Parmar <br>
           HireLink <br>
        </p>
        <p>Follow us on <a href="https://www.linkedin.com/in/karan-parmar9186/">LinkedIn</a></p>
      </div>
    </div>
  </body>
  </html>
  `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // end

    res
      .status(200)
      .json({ message: "Password changed successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
