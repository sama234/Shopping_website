
import axios from "axios";
import { useEffect, useState } from "react";

const Adminall = () => {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const full = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:4000/api/products/getallproducts"
                );

                console.log("Response:", response.data);
                console.log("Products:", response.data.product);

                setdata(response.data.product);

            } catch (error) {

                console.log("Error:", error);

                setError(
                    error.response?.data?.message ||
                    "Something went wrong"
                );

            } finally {

                setLoading(false);

            }
        };

        full();

    }, []);


    // DELETE PRODUCT
    const handleclick = async (id) => {

        try {

            const response = await axios.delete(
                `http://localhost:4000/api/products/deleteproduct/${id}`
            );

            console.log("Delete response:", response.data);

            // Delete product from frontend immediately
            setdata((olddata) =>
                olddata.filter((item) => item._id !== id)
            );

        } catch (error) {

            console.log("Delete error:", error);

            alert(
                error.response?.data?.message ||
                "Product delete failed"
            );

        }
    };


    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2 className="text-2xl font-semibold">
                    Loading Products...
                </h2>
            </div>
        );
    }


    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2 className="text-red-500 text-xl">
                    {error}
                </h2>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-100 pt-28 px-5 pb-10">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-gray-900">
                        All Products
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all products from your admin panel
                    </p>

                </div>


                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {data.map((item) => {

                        return (

                            <div
                                key={item._id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >

                                {/* Image */}
                                <div className="h-60 bg-gray-100 flex justify-center items-center">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />

                                </div>


                                {/* Details */}
                                <div className="p-5">

                                    {/* Name */}
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {item.name}
                                    </h2>


                                    {/* Brand */}
                                    <p className="text-gray-500 mt-1">
                                        Brand: {item.brand}
                                    </p>


                                    {/* Category */}
                                    <p className="text-gray-500">
                                        Category: {item.category}
                                    </p>


                                    {/* Description */}
                                    <p className="text-gray-600 mt-3 line-clamp-2">
                                        {item.description}
                                    </p>


                                    {/* Price */}
                                    <p className="text-2xl font-bold text-green-600 mt-4">
                                        ₹{item.price}
                                    </p>


                                    {/* Stock */}
                                    <p className="text-gray-600 mt-2">
                                        Stock: {item.stock}
                                    </p>


                                    {/* Rating */}
                                    <p className="text-yellow-500 mt-1">
                                        ⭐ {item.rating || "No rating"}
                                    </p>


                                    {/* ID */}
                                    <p className="text-xs text-gray-400 mt-3 break-all">
                                        ID: {item._id}
                                    </p>


                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleclick(item._id)}
                                        className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>
    );
};

export default Adminall;
