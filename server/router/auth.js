import {Router} from 'express';
import AuthController from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/login');
authRouter.post('/logout');
authRouter.post('/registration', AuthController.registration);

authRouter.get('/refresh');
authRouter.get('/activate/:link');

export default authRouter;
