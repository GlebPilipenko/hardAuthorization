import {Router} from 'express';

const authRouter = Router();

authRouter.post('/login');
authRouter.post('/logout');
authRouter.post('/registration');

authRouter.get('/refresh');
authRouter.get('/activate/:link');

export default authRouter;
