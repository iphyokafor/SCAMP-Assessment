import express from 'express';
import controller from '../controllers/productController';
import verify from '../middleware/verifyToken';

const router = express.Router();

router.post('/products', verify, controller.addProduct);
router.get('/products', controller.getAllProducts);
// router.get('/books/:bookId', controller.getOneBook);
// router.patch('/books/:bookId', controller.updateBook);
// router.delete('/books/:bookId', controller.deleteBook);

export default router;