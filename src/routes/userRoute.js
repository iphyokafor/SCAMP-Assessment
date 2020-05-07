import express from 'express';
import User from '../controllers/userController';
const router = express.Router();

router.post('/register', User.register);
router.post('/login', User.login);

export default router;