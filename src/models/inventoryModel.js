import mongoose from 'mongoose';

const Schema = mongoose;
const inventorySchema = mongoose.Schema({
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
  
}, {timestamps: true}
);
 export default mongoose.model('Inventory', inventorySchema);