# Shyan Health – Fat to Fit 🌿
### Premium Ayurvedic Weight Management & eCommerce Platform

Shyan Health is a comprehensive wellness platform designed for Indian women, combining ancient Ayurvedic wisdom with modern nutrition science. This repository contains both the high-performance frontend and the robust Node.js/MongoDB backend.

## 🚀 Key Features
- **Premium eCommerce Engine**: Seamless shopping experience with a sliding cart and multi-step checkout.
- **Razorpay Integration**: Integrated with Razorpay for secure Indian payments (Prepaid & COD Fee logic).
- **Live BMI Calculator**: Real-time Ayurvedic weight analysis and health advice.
- **Expert Diet Guides**: Interactive blog section featuring 7 expert guides (Keto, IF, Vegan, etc.).
- **Admin Dashboard**: Backend APIs for managing products, orders, and viewing business statistics.
- **SEO Optimized**: Fully optimized with JSON-LD Schema, OpenGraph tags, and semantic HTML for Google ranking.
- **Smooth UX**: Intersection Observer animations, scroll progress tracking, and lazy-loaded assets.

---

## 🛠 Tech Stack
- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+), FontAwesome.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JWT (JSON Web Tokens) & BcryptJS.
- **Payment**: Razorpay API.

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/rekacreativelabs-byte/shyanhealth.git
cd shyanhealth
```

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file (see `.env.example`):
   ```bash
   cp .env.example .env
   ```
4. Seed the database (Create Admin & Sample Products):
   ```bash
   node seed.js
   ```
5. Start the server:
   ```bash
   node server.js
   ```

### 3. Frontend Setup
- Simply open `index.html` in your browser, or use a "Live Server" extension in VS Code.

---

## 🛡 Security Note
- Never commit your `.env` file to GitHub.
- The backend includes JWT-based protection for sensitive routes.

## 📄 License
This project is licensed under the MIT License.

## 📞 Support
For wellness consultations or technical queries:
- **WhatsApp**: +91 88029 16080
- **Website**: [shyanhealth.com](https://shyanhealth.com)
