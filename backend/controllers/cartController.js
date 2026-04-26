const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc    Get user cart
// @route   GET /api/cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('products.productId');
    if (cart) {
      res.json(cart);
    } else {
      res.json({ products: [], total: 0 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      const itemIndex = cart.products.findIndex((p) => p.productId.toString() === productId);

      if (itemIndex > -1) {
        cart.products[itemIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    } else {
      cart = new Cart({ userId: req.user._id, products: [{ productId, quantity }] });
    }

    // Recalculate total (simplified)
    const populatedCart = await cart.populate('products.productId');
    cart.total = populatedCart.products.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (cart) {
      cart.products = cart.products.filter((p) => p.productId.toString() !== req.params.id);
      
      const populatedCart = await cart.populate('products.productId');
      cart.total = populatedCart.products.reduce((acc, item) => acc + (item.productId ? item.productId.price * item.quantity : 0), 0);
      
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
