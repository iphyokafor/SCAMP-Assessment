import express from 'express';
import controller from '../controllers/inventoryController';
import verify from '../middleware/verifyToken';
import isAdmin from '../middleware/isAdmin';
import isSalesPerson from '../middleware/isSalesPerson';

const router = express.Router();

router.post('/inventory', verify, isAdmin, controller.addInventory);
router.get('/inventory',  verify, isSalesPerson, controller.getAllInventories);
router.get('/:inventoryId', verify, isSalesPerson, controller.getOneInventory);
router.delete('/inventory/:inventoryId', verify, isAdmin, controller.deleteInventory);
router.patch('/inventory/:inventoryId', verify, isAdmin, controller.updateInventory);

export default router;