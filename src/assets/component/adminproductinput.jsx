
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Adminproductinput = () => {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        image: "",
        stock: "",
        rating: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Input handle
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {

            // Backend ko data bhejne ke liye
            const productData = {
                name: product.name,
                description: product.description,
                price: Number(product.price),
                category: product.category,
                brand: product.brand,
                image: product.image,
                stock: Number(product.stock),
                rating: Number(product.rating)
            };

            // POST request
            const response = await axios.post(
                "http://localhost:4000/api/products/createproduct",
                productData
            );

            console.log("Created Product:", response.data.newproduct);

            setMessage("Product Created Successfully!");

            // Form empty
            setProduct({
                name: "",
                description: "",
                price: "",
                category: "",
                brand: "",
                image: "",
                stock: "",
                rating: ""
            });

        } catch (error) {

            console.log("Error:", error);

            setMessage(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-28 px-5 pb-10">

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-gray-900">
                        Admin Panel
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Add a new product to ShopEasy
                    </p>
                    <Link to="/adminall"><button >All product</button> </Link>

                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

                    <h2 className="text-2xl font-semibold mb-6">
                        Add Product
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Product Name */}
                            <div>

                                <label className="block mb-2 font-medium">
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    placeholder="Enter product name"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                />

                            </div>

                            {/* Brand */}
                            <div>

                                <label className="block mb-2 font-medium">
                                    Brand
                                </label>

                                <input
                                    type="text"
                                    name="brand"
                                    value={product.brand}
                                    onChange={handleChange}
                                    placeholder="Nike, Adidas..."
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                />

                            </div>

                            {/* Price */}
                            <div>

                                <label className="block mb-2 font-medium">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    placeholder="Enter price"
                                    min="0"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                />

                            </div>

                            {/* Category */}
                            <div>

                                <label className="block mb-2 font-medium">
                                    Category
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={product.category}
                                    onChange={handleChange}
                                    placeholder="Shoes, Clothes..."
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                />

                            </div>

                            {/* Stock */}
                            <div>

                                <label className="block mb-2 font-medium">
                                    Stock
                                </label>

                                <input
                                    type="number"
                                    name="stock"
                                    value={product.stock}
                                    onChange={handleChange}
                                    placeholder="Available quantity"
                                    min="0"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                />

                            </div>

                            {/* Rating */}
                            <div>

                                <label className="block mb-2 font-medium">
                                    Rating
                                </label>

                                <input
                                    type="number"
                                    name="rating"
                                    value={product.rating}
                                    onChange={handleChange}
                                    placeholder="0 - 5"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                                />

                            </div>

                        </div>

                        {/* Description */}
                        <div className="mt-5">

                            <label className="block mb-2 font-medium">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                placeholder="Enter product description"
                                rows="5"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                            />

                        </div>

                        {/* Image */}
                        <div className="mt-5">

                            <label className="block mb-2 font-medium">
                                Image URL
                            </label>

                            <input
                                type="text"
                                name="image"
                                value={product.image}
                                onChange={handleChange}
                                placeholder="https://example.com/product.jpg"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                        </div>

                        {/* Message */}
                        {message && (
                            <div className="mt-5 p-3 rounded-lg bg-gray-100 text-center font-medium">
                                {message}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition duration-300 disabled:opacity-50"
                        >
                            {loading
                                ? "Creating Product..."
                                : "Add Product"}
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Adminproductinput;
