import Product from '../models/productModel';
import User from '../models/userModel';

export default {
  addProduct: async(req, res) => {
      const { name } = req.body;
      const nameExist = await Product.findOne({ name });
      if (nameExist) {
          return res.status(400).json({
              message: 'Product already exists'
          });
      }

      const product = new Product({
          // name: req.body.name,
          // quantity: req.body.quantity,
          // price: req.body.price
          ...req.body,
          user: req.user._id
      });

      try {
          const savedProduct = await product.save();
          return res.status(201).json({
              message: 'Product has been added successfully',
              savedProduct
          });

      } catch (err) {
          res.json({
              message: err
          });
      }
  },

  getAllProducts: async(req, res) => {
      try {
          const getproducts = await Product.find({}).populate('user');
          return res.json({
              message: 'View all products',
              getproducts
          });

      } catch (err) {
          return res.json({
              message: err
          });
      }
  },
}
