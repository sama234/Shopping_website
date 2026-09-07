import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../SerchProvider";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {search}=useContext(SearchContext)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Something went wrong
          </h2>
          <p className="text-gray-500 mt-2">{error}</p>
        </div>
      </div>
    );
  }
const filterproduct=products.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="min-h-screen bg-gray-50 pt-24">

      {/* Header */}
      <header className="bg-white sticky top-0 z-0">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* <Link to="/" className="text-2xl font-extrabold text-gray-900">
            Shop<span className="text-yellow-400">Easy</span>
          </Link> */}

          {/* <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-black font-semibold"
            >
              Products
            </Link>
          </div>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Cart 🛒
          </button> */}

        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <p className="text-yellow-600 font-semibold mb-2">
            OUR COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Discover Something
            <span className="text-yellow-500"> Amazing.</span>
          </h1>

          <p className="text-gray-500 max-w-xl mt-4 text-lg">
            Explore our collection of carefully selected products.
            Find something you'll love.
          </p>

        </div>
      </section>

      {/* Products */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              All Products
            </h2>

            <p className="text-gray-500 mt-1">
              {filterproduct.length} products available
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {filterproduct.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">

                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.category?.name}
                </span>

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="font-bold text-lg text-gray-900 truncate">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-5">

                  <span className="text-2xl font-extrabold text-gray-900">
                    ${product.price}
                  </span>

                  <Link
                    to={`/detail/${product.id}/${product.slug}`}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition"
                  >
                    View
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
};

export default Cart;