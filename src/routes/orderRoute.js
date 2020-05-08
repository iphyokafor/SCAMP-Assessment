import express from 'express';
import controller from '../controllers/orderController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';

const router = express.Router();

router.post('/orders', verify, controller.addOrder);
router.get('/orders',  verify, controller.getAllOrders);

export default router;