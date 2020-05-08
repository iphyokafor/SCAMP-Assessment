import express from 'express';
import controller from '../controllers/productController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';

const router = express.Router();

router.post('/products', verify, isAdmin, controller.addProduct);
router.get('/products', controller.getAllProducts);
router.get('/products/:productId', controller.getOneProduct);
router.patch('/products/:productId', verify, isAdmin, controller.updateProduct);
router.delete('/products/:productId', verify, isAdmin, controller.deleteProduct);

export default router;