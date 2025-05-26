import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return;

    if (email === process.env.ADMIN_EMAIL) {
      const token = jwt.sign(email, process.env.JWT_SECRET);
      return res.json({ success: true, token, message: "Welcome admin" });
    } else {
      return res.json({ success: false, message: "Unauthorized access" });
    }
  } catch (error) {
    console.log("Error logging in", error);
  }
};
