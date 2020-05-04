import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 100
  },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 150
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    role: {
      type: String,
      role: ['Admin', 'SalesPerson'],
      default: 'SalesPerson'
    },
}, { timestamps: true });

export default mongoose.model('User', userSchema);