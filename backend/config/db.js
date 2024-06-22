import mongoose from "mongoose";

//export const connectDB = async () => {
// await mongoose
//   .connect(
//    "mongodb+srv://vaishnaviboddupally1:Ramukavitha6@cluster0.9hxwjir.mongodb.net/food-del"
//  )
//  .then(() => console.log("db connected"));
//};

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vaishnaviboddupally:Ramukavitha6@cluster0.n5wtzsv.mongodb.net/fooddel-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
