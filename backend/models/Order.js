const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, required: true, default: 'Pending' },
    paymentId: { type: String },
    orderStatus: { type: String, required: true, default: 'Pending' },
    shippingAddress: { type: String, required: true },
    contactNumber: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
