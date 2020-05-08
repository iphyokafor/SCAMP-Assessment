import mongoose from 'mongoose';

const Schema = mongoose;
const productSchema = mongoose.Schema({
  name: {
    type: String
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // orders:[{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Order'
  // }]
}, {timestamps: true} 
);

export default mongoose.model('Product', productSchema);