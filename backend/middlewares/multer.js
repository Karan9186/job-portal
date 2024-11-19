// import multer from "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({ storage }).single("file");
import multer from "multer";
import path from "path";

// Define the storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define where to store uploaded files
    const uploadDir = "uploads/";

    // Ensure the 'uploads' directory exists
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Renaming the file to avoid name conflicts (use current timestamp)
    cb(null, Date.now() + path.extname(file.originalname)); // File extension remains the same
  },
});

// Define the file upload middleware
export const uploadFile = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Optional: Set file size limit (e.g., 10MB)
}).single("file"); // 'file' is the field name from the form (adjust if needed)
