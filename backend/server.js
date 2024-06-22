import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
// Enable preflight requests for all routes
app.options("*", cors());

// Example routes (you can remove these if they are defined in `userRouter`)
app.post("/api/user/register", (req, res) => {
  // Your registration logic here
  res.json({ success: true, token: "your_token_here" });
});

app.post("/api/user/login", (req, res) => {
  // Your login logic here
  res.json({ success: true, token: "your_token_here" });
});

// db connection
connectDB();

// API ENDPOINTS
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
//mongodb+srv://vaishnaviboddupally:Ramukavitha6@cluster0.n5wtzsv.mongodb.net/?
