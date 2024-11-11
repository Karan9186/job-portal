import jwt from "jsonwebtoken";

const iAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "user not authenticated",
        succsess: false,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "invalid token",
        succsess: false,
      });
    }
    req.id = decode.userId;

    console.log("the id is" + req.id);

    next();
  } catch (err) {
    console.log(err);
  }
};

export default iAuthentication;
