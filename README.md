# 🛒 MERN E-Commerce Application

A Full-Stack E-Commerce Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This project includes user authentication, product management (CRUD), bulk product upload, protected admin routes, order management, and a modern Tailwind CSS UI.

---

# 🚀 Live Features

✅ User Registration & Login (JWT Authentication)  
✅ Protected Routes (Admin & User)  
✅ Product CRUD (Create, Read, Update, Delete)  
✅ Bulk Add Products (Dynamic Form)  
✅ Order Management  
✅ User Profile Page  
✅ Logout Functionality  
✅ Image URL Support  
✅ Tailwind CSS Responsive UI  

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js

---

# 📁 Project Structure

```
mern-ecommerce/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce
```

---

# 🔧 Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Backend Server

```bash
npm run dev
```

Server will start on:
```
http://localhost:5000
```

---

# 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on:
```
http://localhost:3000
```

---

# 🔐 Authentication System

- User Register
- User Login
- JWT Token Generation
- Password Hashing using bcrypt
- Protected Routes
- Auto Redirect if Already Logged In
- Logout Feature
- User Profile Page

---

# 📦 Product Management

Admin can:

- Add Product
- Edit Product
- Delete Product
- View All Products
- Bulk Add Multiple Products at Once
- Upload Image via URL
- Manage Stock & Category

---

# 🔥 Bulk Add Products Feature

This feature allows admin to:

- Dynamically add multiple product forms
- Remove product forms
- Submit all products in one request
- Backend uses `insertMany()` for fast database insertion

---

# 📦 Order System

- Create Order
- View Orders
- Manage Orders (Admin)

---

# 🛡️ Protected Routes

- Admin routes protected via JWT middleware
- Unauthorized users redirected to login
- Authenticated users redirected away from login/register page

---

# 🌐 API Endpoints

## Auth Routes

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

## Product Routes

```
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
POST   /api/products/bulk
```

## Order Routes

```
POST   /api/orders
GET    /api/orders
```

---

# 🎨 UI & Styling

- Tailwind CSS
- Responsive Design
- Modern Admin Dashboard Layout
- Clean Card-Based UI
- Form Validation
- Success & Error Messages

---

# 📌 Future Improvements

- Payment Gateway Integration
- Product Search & Filter
- Pagination
- Image Upload with Cloudinary
- Product Reviews & Ratings
- Wishlist Feature
- Admin Dashboard Analytics
- Dark Mode

---

# 🧪 Testing

You can test APIs using:

- Postman
- Thunder Client (VS Code Extension)

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Your Name  
GitHub: https://github.com/your-username  
LinkedIn: https://linkedin.com/in/your-profile  

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!

