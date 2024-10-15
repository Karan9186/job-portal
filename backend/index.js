import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import databaseCon from "./utils/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.routes.js";
import applicationRoute from "./routes/application.routes.js";
import mongoose from "mongoose";
dotenv.config({});
const app = express();

// middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http//localhost:5173",
  credentials: true,
};

mongoose.connect(process.env.MONGOURL)
  .then(() => {
    console.log("connected suceefully");
  }).catch((err) => {
    console.log(err);
  })

app.use(cors(corsOption));
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 3000");
  // databaseCon();
});
