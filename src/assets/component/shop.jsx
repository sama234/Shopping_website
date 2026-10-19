
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchContext } from "../../SerchProvider";
import { addtocart } from "../../slice/cartslice";

const categoryGroups = {
  clothing: {
    name: "Clothing",
    apiCategories: ["mens-shirts", "tops", "womens-dresses"],
  },
  electronics: {
    name: "Electronics",
    apiCategories: ["laptops", "mobile-accessories", "smartphones", "tablets"],
  },
  shoes: {
    name: "Shoes",
    apiCategories: ["mens-shoes", "womens-shoes"],
  },
  "home-living": {
    name: "Home & Living",
    apiCategories: ["furniture", "home-decoration", "kitchen-accessories"],
  },
};

const Shop = () => {
  const { search } = useContext(SearchContext);
  const dispatch = useDispatch();
  const { category: categorySlug } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("https://dummyjson.com/products?limit=0", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Could not load products (${response.status}).`);
        }
        const result = await response.json();
        if (!Array.isArray(result.products)) {
          throw new Error("The product response was not in the expected format.");
        }
        setData(result.products);
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message || "Could not load products. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, []);

  // ADD TO CART FUNCTION
  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
  };

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

  const selectedCategory = categorySlug ? categoryGroups[categorySlug] : null;
  const filterproduct = data.filter((item) => {
    const matchesCategory =
      !categorySlug || selectedCategory?.apiCategories.includes(item.category);
    const matchesSearch = `${item.title}${item.price}`
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 pt-24">
        <div className="text-center">
          <p className="font-semibold text-red-600">{error}</p>
          <Link to="/shop" className="mt-4 inline-block text-indigo-600 underline">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 pt-24 sm:px-6 lg:px-10">

      {/* HEADER */}
      <div className="mx-auto mb-10 max-w-7xl text-center">

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {categorySlug
            ? selectedCategory?.name || "Category not found"
            : "Our Shop"}
        </h1>

        <p className="mt-3 text-gray-500">
          {categorySlug
            ? selectedCategory
              ? `Explore our ${selectedCategory.name.toLowerCase()} collection`
              : "This category is not available."
            : "Find the best products at amazing prices"}
        </p>

      </div>

      {/* PRODUCTS */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {filterproduct.map((item) => {

          // ORIGINAL PRICE
          const originalPrice =
            item.discountPercentage > 0
              ? item.price /
                (1 - item.discountPercentage / 100)
              : item.price;

          return (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <Link to={`/detail/${item.id}`}>

                <div className="relative flex h-64 items-center justify-center bg-gray-50 p-5">

                  {/* DISCOUNT */}
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

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5">

                {/* CATEGORY */}
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {item.category}
                </p>

                {/* TITLE */}
                <h2 className="mt-2 line-clamp-2 min-h-14 text-lg font-bold text-gray-900">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* BRAND */}
                <p className="mt-3 text-sm">

                  <span className="font-semibold text-gray-700">
                    Brand:
                  </span>{" "}

                  <span className="text-gray-500">
                    {item.brand || "No Brand"}
                  </span>

                </p>

                {/* RATING */}
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

                {/* PRICE */}
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

                {/* STOCK */}
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

                {/* BUTTONS */}
                <div className="mt-auto flex gap-3 pt-5">

                  {/* BUY NOW */}
                  <Link
                    to={`/buynow/${item.id}`}
                    className="flex-1"
                  >
                    <button
                      className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
                    >
                      Buy Now
                    </button>
                  </Link>

                  {/* ADD TO CART */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="rounded-xl border border-indigo-600 px-5 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
                  >
                    🛒
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {filterproduct.length === 0 && (
        <p className="mx-auto mt-12 max-w-7xl text-center text-gray-500">
          {categorySlug && !selectedCategory
            ? "We could not find that category."
            : "No products found."}
        </p>
      )}

    </div>
  );
};

export default Shop;