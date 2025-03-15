import path from "path";
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

dotenv.config();

const app = express();
app.use("/uploads", express.static(path.join("uploads")));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174","https://job-portal-1-my02.onrender.com/"], // React app's URL
    credentials: true, // Enable credentials (cookies, headers)
  })
);

app.get("/", (req, res) => {
  res.send("working");
});
// Define Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/recruiter", recruiterRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  databaseCon(); // Connect to the database
});
