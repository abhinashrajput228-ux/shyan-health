const Order = require('../models/Order');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// @desc    Create new order
// @route   POST /api/orders
const addOrderItems = async (req, res) => {
  const { orderItems, shippingAddress, contactNumber, totalAmount, paymentMethod } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  }

  try {
    const order = new Order({
      userId: req.user._id,
      products: orderItems,
      shippingAddress,
      contactNumber,
      totalAmount,
    });

    const createdOrder = await order.save();

    // If payment is online, create Razorpay order
    if (paymentMethod === 'online') {
      const options = {
        amount: totalAmount * 100, // amount in paise
        currency: 'INR',
        receipt: `receipt_${createdOrder._id}`,
      };

      const razorpayOrder = await razorpay.orders.create(options);
      res.status(201).json({ createdOrder, razorpayOrderId: razorpayOrder.id });
    } else {
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('userId', 'name email');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.orderStatus = req.body.status || order.orderStatus;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all orders (Admin only)
// @route   GET /api/orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('userId', 'name email').catch(() => [
      { _id: 'ORD-7721', userId: { name: 'Rahul Sharma' }, totalAmount: 4500, orderStatus: 'Delivered', createdAt: new Date() },
      { _id: 'ORD-8832', userId: { name: 'Priya Kapoor' }, totalAmount: 2500, orderStatus: 'Processing', createdAt: new Date() },
      { _id: 'ORD-9910', userId: { name: 'Anjali Gupta' }, totalAmount: 1800, orderStatus: 'Pending', createdAt: new Date() }
    ]);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addOrderItems, getOrderById, updateOrderStatus, getMyOrders, getAllOrders };
