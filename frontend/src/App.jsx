import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductForm from "./pages/ProductForm";
import Register from "./pages/Register";
import BulkProductAdd from "./pages/BulkProductAdd";

function App() {
   <ToastContainer position="top-right" autoClose={3000} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/products/bulk" element={<BulkProductAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
