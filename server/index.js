import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './router/user.js';
import authRouter from './router/auth.js';

dotenv.config();

const RESERVE_PORT = 5000;

const PORT = process.env.APP_PORT || RESERVE_PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRouter)
app.use('/api', userRouter)

const startApp = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    app.listen(PORT, () => console.log(`Server was started on PORT = ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
