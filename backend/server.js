const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = require('./config/db');
require('./config/firebase'); // Initialize Firebase
require('./config/cloudinary'); // Cloudinary — Photos Database (credentials in .env)

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes')); // Photo upload → Cloudinary
app.use('/api/meta', require('./routes/metaRoutes')); // Meta Conversions API

// Root Route
app.get('/', (req, res) => {
  res.send('Shyan Health API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://0.0.0.0:${PORT}`);
  });
}

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection:', err.message);
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err.message);
});

module.exports = app;
