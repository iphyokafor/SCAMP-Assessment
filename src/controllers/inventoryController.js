import Inventory from '../models/inventoryModel';
import User from '../models/userModel';
import Product from '../models/productModel';

export default {
  addInventory: async(req, res) => {
      const { products } = req.body;
      const productsExist = await Inventory.findOne({ products });
      if (productsExist) {
          return res.status(400).json({
              message: 'Inventory already exists'
          });
      }

      const inventory = new Inventory({
          // active: req.body.active,
          // products: req.body.products,
          // modifiedOn:req.body.modifiedOn,
          // role: req.body.role
          ...req.body,
          userId: req.user._id,
      });

      try {
          const savedInventory = await inventory.save();
          return res.status(201).json({
              message: 'Inventory has been added successfully',
              savedInventory
          });

      } catch (err) {
          res.json({
              message: err
          });
      }
  },

  getAllInventories: async(req, res) => {
      try {
          const getInventories = await Inventory.find({}).populate('products').populate('userId');
          return res.json({
              message: 'View all Inventories',
              getInventories
          });

      } catch (err) {
          return res.json({
              message: err
          });
      }
  },
}
