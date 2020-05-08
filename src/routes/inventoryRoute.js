import express from 'express';
import controller from '../controllers/inventoryController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';
import isSalesPerson from '../middleware/isSalesPerson';

const router = express.Router();

router.post('/inventory', verify, isAdmin, controller.addInventory);
router.get('/inventory',  verify, isSalesPerson, controller.getAllInventories);
router.get('/:inventoryId', controller.getOneInventory);
router.delete('/inventory/:inventoryId', controller.deleteInventory);
router.patch('/inventory/:inventoryId', controller.updateInventory);

export default router;