import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      sucess: false,
      message: "Please provide all fields",
    });
  }
  
  await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });
  res.status(200).json({
    success: true,
    message: "Message sent successfully",
  });
};
