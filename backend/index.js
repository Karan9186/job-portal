import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import databaseCon from "./utils/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.routes.js";
import applicationRoute from "./routes/application.routes.js";
import recruiterRoute from "./routes/recruiter.routes.js";
dotenv.config({});
const app = express();

// middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // React app's URL
    credentials: true, // Enable credentials (cookies, headers)
  })
);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/recruiter", recruiterRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 3000");
  databaseCon();
});
