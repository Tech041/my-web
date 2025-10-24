import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { password } = req.body;
    

    if (!password) return;

    if (password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ password }, process.env.JWT_SECRET);
      return res.json({ success: true, token, message: "Welcome admin" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access" });
    }
  } catch (error) {
    console.log("Error logging ", error);
    return res.status(500).json({ message: "Server error" });
  }
};
