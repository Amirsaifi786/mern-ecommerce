import React, { useState } from "react";
import axios from "axios";

const BulkProductAdd = () => {
  const [products, setProducts] = useState([
    { name: "", price: "", image: "", category: "", stock: "" },
  ]);

  const handleChange = (index, e) => {
    const values = [...products];
    values[index][e.target.name] = e.target.value;
    setProducts(values);
  };

  const addProductForm = () => {
    setProducts([
      ...products,
      { name: "", price: "", image: "", category: "", stock: "" },
    ]);
  };

  const removeProductForm = (index) => {
    const values = [...products];
    values.splice(index, 1);
    setProducts(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/products/bulk", { products });
      alert("Products Added Successfully ✅");
      setProducts([{ name: "", price: "", image: "", category: "", stock: "" }]);
    } catch (error) {
      alert("Error adding products ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Bulk Add Products
          </h2>
          <button
            type="button"
            onClick={addProductForm}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            + Add More
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Product #{index + 1}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>

                {/* Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              </div>

              {/* Remove Button */}
              {products.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProductForm(index)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-lg"
                >
                  ✖
                </button>
              )}
            </div>
          ))}

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-200"
            >
              Save All Products
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BulkProductAdd;
