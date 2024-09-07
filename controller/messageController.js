import { Message } from "../models/messageSchema.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";

export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill in all fields", 400));
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
});

