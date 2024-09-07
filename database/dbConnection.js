import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "HOSPITAL_MANAGEMENT_MERN",
    })
    .then(() => {
      console.log("Connected to database");
    }).catch((err) => {
      console.log(err);
    });
};
