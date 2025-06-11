import Message from "../model/message.model.js";

export const postMessages = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "One or more inputs are missing" });
    }
    const newMessage = await Message.create({
      name,
      email,
      message,
    });
    return res.status(201).json({ success: true, newMessage });
  } catch (error) {
    console.log("Error posting message", error);
  }
};

export const getMessages = async (req, res) => {
  const allMessages = await Message.find({});

  return res.status(200).json({ success: true, allMessages });
};
