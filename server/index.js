import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 5000;
const app = express();

const startApp = async () => {
  try {
    app.listen(PORT, () => console.log(`Server was started on PORT = ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
