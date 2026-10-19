
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BuyNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderMessage, setOrderMessage] = useState("");

  const [delivery, setDelivery] = useState({
    fullName: "",
    phone: "",
    city: "",
    pincode: "",
    address: "",
  });

  // FETCH SELECTED PRODUCT
  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch product.");
        }

        const result = await response.json();

        if (!result.id || result.id !== Number(id)) {
          throw new Error("Product not found.");
        }

        setProduct(result);
        setQuantity(1);
      } catch (error) {
        console.error("Product fetching error:", error);
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProduct();
    } else {
      setError("Product ID is missing.");
      setLoading(false);
    }
  }, [id]);

  // HANDLE DELIVERY INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDelivery((previous) => ({
      ...previous,
      [name]: value,
    }));

    setOrderMessage("");
  };

  // PLACE ORDER
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!product) {
      setOrderMessage("Product information is unavailable.");
      return;
    }

    if (product.stock <= 0) {
      setOrderMessage("Sorry, this product is out of stock.");
      return;
    }

    if (quantity > product.stock) {
      setOrderMessage("Selected quantity exceeds available stock.");
      return;
    }

    const { fullName, phone, city, pincode, address } = delivery;

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !pincode.trim() ||
      !address.trim()
    ) {
      setOrderMessage("Please fill in all delivery details.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone.trim())) {
      setOrderMessage("Enter a valid 10-digit phone number.");
      return;
    }

    if (!/^[0-9]{6}$/.test(pincode.trim())) {
      setOrderMessage("Enter a valid 6-digit Indian PIN code.");
      return;
    }

    // Demo only: this does not save an order to a backend.
    const order = {
      productId: product.id,
      productName: product.title,
      price: product.price,
      quantity,
      total: Number(totalPrice.toFixed(2)),
      delivery,
    };

    console.log("Order details:", order);

    setOrderMessage(
      "Details validated successfully! Connect your backend to place the order."
    );
  };

  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600" />

          <p className="mt-4 font-semibold text-gray-600">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  // ERROR
  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {error || "Product not found"}
          </h1>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  // ORIGINAL PRICE
  const originalPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price;

  // TOTAL PRICE
  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 pt-28 sm:px-8 lg:px-16">
      {/* HEADER */}
      <div className="mx-auto mb-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Buy Now
        </h1>

        <p className="mt-2 text-gray-500">
          Review your product before placing your order.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* PRODUCT INFORMATION */}
        <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Product Information
          </h2>

          <div className="flex flex-col gap-7 sm:flex-row">
            {/* IMAGE */}
            <div className="relative flex h-72 w-full items-center justify-center rounded-2xl bg-gray-50 p-6 sm:w-72">
              {product.discountPercentage > 0 && (
                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -{Math.round(product.discountPercentage)}%
                </span>
              )}

              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                {product.category}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {product.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                {product.description}
              </p>

              <p className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">Brand:</span>{" "}
                {product.brand || "No Brand"}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-xl text-yellow-400">★</span>

                <span className="font-semibold">
                  {product.rating}
                </span>

                <span className="text-sm text-gray-400">
                  ({product.reviews?.length || 0} reviews)
                </span>
              </div>

              {/* STOCK */}
              <div className="mt-4">
                {product.stock > 0 ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {product.stock} items in stock
                  </span>
                ) : (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* PRICE */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>

                {product.discountPercentage > 0 && (
                  <span className="text-lg text-gray-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* QUANTITY */}
              <div className="mt-6 flex items-center gap-4">
                <span className="font-semibold text-gray-700">
                  Quantity:
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  -
                </button>

                <span className="w-8 text-center text-lg font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) =>
                      Math.min(product.stock, q + 1)
                    )
                  }
                  disabled={
                    product.stock <= 0 ||
                    quantity >= product.stock
                  }
                  className="h-10 w-10 rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* EXTRA INFORMATION */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400">SKU</p>
              <p className="mt-1 break-words font-semibold text-gray-800">
                {product.sku || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400">Warranty</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {product.warrantyInformation || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400">Shipping</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {product.shippingInformation || "Free"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400">Return</p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                {product.returnPolicy || "N/A"}
              </p>
            </div>
          </div>

          {/* DELIVERY FORM */}
          <form
            id="delivery-form"
            onSubmit={handlePlaceOrder}
            className="mt-10 border-t pt-8"
          >
            <h2 className="mb-5 text-xl font-bold">
              Delivery Details
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                value={delivery.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                autoComplete="name"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <input
                type="tel"
                name="phone"
                value={delivery.phone}
                onChange={handleChange}
                placeholder="10-digit Phone Number"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <input
                type="text"
                name="city"
                value={delivery.city}
                onChange={handleChange}
                placeholder="City"
                autoComplete="address-level2"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <input
                type="text"
                name="pincode"
                value={delivery.pincode}
                onChange={handleChange}
                placeholder="6-digit PIN Code"
                autoComplete="postal-code"
                inputMode="numeric"
                maxLength={6}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
              />

              <textarea
                name="address"
                value={delivery.address}
                onChange={handleChange}
                rows={4}
                placeholder="Full Address"
                autoComplete="street-address"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600 sm:col-span-2"
              />
            </div>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-bold">
            Order Summary
          </h2>

          <div className="flex gap-4 border-b pb-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-50 p-2">
              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="line-clamp-2 font-semibold text-gray-800">
                {product.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Qty: {quantity}
              </p>
            </div>
          </div>

          {/* PRICE DETAILS */}
          <div className="mt-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Price</span>
              <span className="font-semibold">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Quantity</span>
              <span className="font-semibold">{quantity}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Delivery</span>
              <span className="font-semibold text-green-600">
                FREE
              </span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="mt-6 flex items-center justify-between border-t pt-5">
            <span className="text-lg font-bold">Total</span>

            <span className="text-3xl font-bold text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          {/* MESSAGE */}
          {orderMessage && (
            <p
              role="status"
              className="mt-5 rounded-lg bg-indigo-50 p-3 text-sm text-indigo-700"
            >
              {orderMessage}
            </p>
          )}

          {/* PLACE ORDER */}
          <button
            type="submit"
            form="delivery-form"
            disabled={product.stock <= 0}
            className="mt-7 w-full rounded-xl bg-indigo-600 py-4 font-bold text-white transition hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {product.stock > 0 ? "Place Order" : "Out of Stock"}
          </button>

          {/* BACK */}
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="mt-3 w-full rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Continue Shopping
          </button>

          <p className="mt-5 text-center text-xs text-gray-400">
            Secure checkout • Fast delivery • Easy returns
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;