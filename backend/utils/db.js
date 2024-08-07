import mongoose from "mongoose";
import dotenv  from "dotenv";
dotenv.config()

const databaseCon=async()=>{
  try{
    await mongoose.connect(process.env.MONGOURL);
    console.log("conneted");
  }
  catch(err){
    console.log(err);
  }
}
export default databaseCon;
