import express from 'express';
import User from '../controllers/userController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';
const router = express.Router();

router.post('/register', User.register);
router.post('/login', User.login);
router.get('/users', verify, isAdmin, User.getAllUsers);

export default router;