
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product3, setProduct3] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const full = async () => {
      try {
        const result = await Promise.allSettled([
          axios.get("https://dummyjson.com/products/category/beauty"),
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://dummyjson.com/products"),
        ]);

        // API 1
        if (result[0].status === "fulfilled") {
          setProduct(result[0].value.data.products);
        }

        // API 2
        if (result[1].status === "fulfilled") {
          setProduct1(result[1].value.data);
        }

        // API 3
        if (result[2].status === "fulfilled") {
          setProduct3(result[2].value.data.products);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    full();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-400 rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-semibold text-gray-700">
            Loading Products...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 px-6 lg:px-12 pb-20">
      <div className="max-w-7xl mx-auto mb-12 text-center">

        <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">
          ShopEasy Store
        </p>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
          Explore Our Products
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover amazing products from our collection and find
          everything you need in one place.
        </p>
      </div>
      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-yellow-500 font-semibold">
              COLLECTION 01
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Beauty Products
            </h2>
          </div>
          <span className="hidden sm:block text-gray-500">
            {product.length} Products
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">

                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full object-contain p-6 group-hover:scale-110 transition duration-500"
                />

                {/* <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span> */}

              </div>
              <div className="p-5">

                <p className="text-xs uppercase text-gray-400 font-semibold">
                  Beauty
                </p>

                <h3 className="font-bold text-lg text-gray-900 mt-1 line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>


                {/* PRICE */}

                <div className="flex items-center justify-between mt-5">

                  <span className="text-xl font-extrabold text-gray-900">
                    ${item.price}
                  </span>

                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:text-black transition">
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto mb-20">

        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="text-yellow-500 font-semibold">
              COLLECTION 02
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Trending Products
            </h2>
          </div>

          <span className="hidden sm:block text-gray-500">
            {product1.length} Products
          </span>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {product1.map((item) => (

            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain p-8 group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 right-4 bg-white shadow px-3 py-1 rounded-full text-sm">
                  ⭐ {item.rating?.rate || "4.5"}
                </span>

              </div>

              <div className="p-5">

                <p className="text-xs uppercase text-gray-400 font-semibold">
                  {item.category}
                </p>

                <h3 className="font-bold text-lg text-gray-900 mt-1 line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between mt-5">

                  <span className="text-xl font-extrabold">
                    ${item.price}
                  </span>

                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:text-black transition">
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="text-yellow-500 font-semibold">
              COLLECTION 03
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              All Products
            </h2>
          </div>

          <span className="hidden sm:block text-gray-500">
            {product3.length} Products
          </span>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {product3.map((item) => (

            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}

              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">

                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full object-contain p-6 group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  SALE
                </span>

              </div>

              <div className="p-5">

                <p className="text-xs uppercase text-gray-400 font-semibold">
                  {item.category}
                </p>

                <h3 className="font-bold text-lg text-gray-900 mt-1 line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <span className="text-xl font-extrabold">
                    ${item.price}
                  </span>

                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:text-black transition">
                    Add to Cart
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Page;