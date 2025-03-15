import jwt from "jsonwebtoken";

const iAuthentication = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
    }

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    // Attach user ID to request object
    req.id = decoded.userId;
    console.log("User ID:", req.id);

    next(); // Proceed to the next middleware
  } catch (err) {
    console.error("Authentication error:", err);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export default iAuthentication;
