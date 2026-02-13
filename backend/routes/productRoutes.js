const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// --- MULTER CONFIGURATION ---
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); // Ensure this folder exists in your root directory
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// --- ROUTES ---
router.route("/")
  .get(getProducts)
  .post(upload.single("image"), createProduct); // Added upload middleware

router.route("/:id")
  .get(getProductById)
  .put(upload.single("image"), updateProduct) // Added upload middleware
  .delete(deleteProduct);
  
  router.post("/bulk", async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products provided" });
    }

    await Product.insertMany(products);

    res.status(201).json({ message: "Products added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;