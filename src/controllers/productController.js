import Product from '../models/productModel';

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

  getOneProduct: async(req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (err) {
        res.json({
            message: err
        });
    }
},
deleteProduct: async(req, res) => {
    try {
        const removedProduct = await Product.deleteOne({ _id: req.params.productId });
        res.json(removedProduct);
    } catch (err) {
        res.json({
            message: err
        });
    }
},
updateProduct: async(req, res) => {
    try {
        const updatedProduct = await Product.updateOne({ _id: req.params.productId }, { $set: { name: req.body.name, quantity: req.body.quantity, price: req.body.price } });
        res.json({
            message: 'Product updated successfully',
            updatedProduct
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
}
}
