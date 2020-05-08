import Inventory from '../models/inventoryModel';

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

  getOneInventory: async(req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.inventoryId);
        res.json(inventory);
    } catch (err) {
        res.json({
            message: err
        });
    }
},
deleteInventory: async(req, res) => {
    try {
        const removedInventory = await Inventory.deleteOne({ _id: req.params.inventoryId });
        res.json(removedInventory);
    } catch (err) {
        res.json({
            message: err
        });
    }
},
updateInventory: async(req, res) => {
    try {
        const updatedInventory = await Inventory.updateOne({ _id: req.params.inventoryId }, { $set: { products: req.body.products, active: req.body.active, modifiedOn: req.body.modifiedOn } });
        res.json({
            message: 'Inventory updated successfully',
            updatedInventory
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
}
}
