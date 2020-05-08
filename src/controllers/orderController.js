import Order from '../models/orderModel';
import User from '../models/userModel';
import Product from '../models/productModel';

export default {
  addOrder: async(req, res) => {
      const { name } = req.body;
      const nameExist = await Order.findOne({ name });
      if (nameExist) {
          return res.status(400).json({
              message: 'Order already exists'
          });
      }

      const order = new Order({
          // active: req.body.active,
          // products: req.body.products,
          // modifiedOn:req.body.modifiedOn,
          // role: req.body.role
          ...req.body,
          userId: req.user._id,
      });

      try {
          const savedOrder = await order.save();
          return res.status(201).json({
              message: 'Order has been added successfully',
              savedOrder
          });

      } catch (err) {
          res.json({
              message: err
          });
      }
  },

  getAllOrders: async(req, res) => {
      try {
          const getOrders = await Order.find({}).populate({
            path: 'products',
            populate:{
              path: 'orders'
            }
          }).populate('products');
          return res.json({
              message: 'View all orders',
              getOrders
          });

      } catch (err) {
          return res.json({
              message: err
          });
      }
  },
}
