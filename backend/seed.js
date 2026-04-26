const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected for seeding...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();

    // Create Admin User
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@shyanhealth.com',
      password: 'admin123',
      role: 'admin',
    });

    console.log('Admin User Created!');
    console.log('Email: admin@shyanhealth.com');
    console.log('Password: admin123');

    // Create Sample Products
    const products = [
      {
        name: 'Fat to Fit Tablets',
        description: 'Natural Ayurvedic weight management tablets.',
        price: 3000,
        image: 'assets/images/Fat to Fit Tablets.png',
        category: 'Herbal Supplements',
        stock: 100,
      },
      {
        name: 'PCOS Balance Kit',
        description: 'Hormonal balance for women.',
        price: 2500,
        image: 'assets/images/PCOS Balance Kit.png',
        category: 'Women\'s Health',
        stock: 50,
      }
    ];

    await Product.insertMany(products);
    console.log('Sample Products Added!');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
