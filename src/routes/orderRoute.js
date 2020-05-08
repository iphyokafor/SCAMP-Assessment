import express from 'express';
import controller from '../controllers/orderController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';
import isSalesPerson from '../middleware/isSalesPerson';

const router = express.Router();

router.post('/orders', verify, isAdmin, controller.addOrder);
router.get('/orders',  verify, isSalesPerson, controller.getAllOrders);

export default router;