import mongoose from 'mongoose';

const Schema = mongoose;
const orderSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
  ref: 'User'
  },
  products: [
    {
      type:Schema.Types.ObjectId,
      ref: 'Product',
    }
  ]
  ,
  active: {
    type: Boolean,
    default: true
  },
  modifiedOn: {
    type: Date,
    default:Date.now()
  },
  role: {
    type: String,
    role: ['Admin', 'SalesPerson'],
    default: 'SalesPerson'
  }
}, {timestamps: true}
);
 export default mongoose.model('Order', orderSchema);