import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const full = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();

        console.log("products", result.products);

        setData(result.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    full();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>

          <p className="mt-4 font-semibold text-gray-600">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Shop
        </h1>

        <p className="mt-3 text-gray-500">
          Find the best products at amazing prices
        </p>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => {
          const originalPrice =
            item.discountPercentage > 0
              ? item.price / (1 - item.discountPercentage / 100)
              : item.price;

          return (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
      <Link to={`/detail/${item.id}`}>     <div className="relative flex h-64 items-center justify-center bg-gray-50 p-5">

                {/* Discount */}
                {item.discountPercentage > 0 && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    -{Math.round(item.discountPercentage)}%
                  </span>
                )}

                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
</Link>   
              {/* Content */}
              <div className="flex flex-1 flex-col p-5">

                {/* Category */}
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {item.category}
                </p>

                {/* Title */}
                <h2 className="mt-2 line-clamp-2 min-h-14 text-lg font-bold text-gray-900">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* Brand */}
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-gray-700">
                    Brand:
                  </span>{" "}
                  <span className="text-gray-500">
                    {item.brand || "No Brand"}
                  </span>
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-yellow-400">
                    ★
                  </span>

                  <span className="font-semibold text-gray-800">
                    {item.rating}
                  </span>

                  <span className="text-sm text-gray-400">
                    ({item.reviews?.length || 0} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">
                    ${item.price}
                  </span>

                  {item.discountPercentage > 0 && (
                    <span className="text-sm text-gray-400 line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Stock */}
                <div className="mt-3">
                  {item.stock > 0 ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      In Stock
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-5">
                  <button className="flex-1 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
                    Buy Now
                  </button>

                  <button className="rounded-xl border border-indigo-600 px-4 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
