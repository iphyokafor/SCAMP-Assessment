import express from 'express';
import controller from '../controllers/productController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';

const router = express.Router();

router.post('/products', verify, isAdmin, controller.addProduct);
router.get('/products', controller.getAllProducts);
// router.get('/books/:bookId', controller.getOneBook);
// router.patch('/books/:bookId', controller.updateBook);
// router.delete('/books/:bookId', controller.deleteBook);

export default router;