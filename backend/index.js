import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import userRouter from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";

mongoose.connect(process.env.MONGO_DB)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/backend/user", userRouter);
app.use("/backend/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Sever Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
