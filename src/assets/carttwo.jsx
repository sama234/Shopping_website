import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Carttwo = () => {
  const navigate = useNavigate();

  // Get cart products from Redux
  const products = useSelector((state) => state.cart.item);

  const click = () => {
    navigate("/paymentpop");
  };

  const Click = () => {
    navigate("/newcart");
  };

  // Calculate subtotal
  const subtotal = products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  const shipping = 5.99; // Fixed shipping cost
  const total = subtotal + shipping;

  // Empty cart
  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5">

        <div className="bg-white border rounded-xl p-10 text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-2">
            Add some products before checkout.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 font-sans">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            
         </h1>

          <p className="text-gray-500 mt-1">
            Review your order before payment
          </p>

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5">


            {/* ORDER ITEMS */}
            <div className="bg-white border rounded-xl p-6">

              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Your Items
              </h2>


              {products.map((product) => (

                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row gap-5 items-center border-b last:border-b-0 pb-6 mb-6 last:mb-0"
                >

                  {/* IMAGE */}
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-28 h-32 object-cover rounded-lg bg-gray-100"
                  />


                  {/* PRODUCT INFORMATION */}
                  <div className="flex-1 text-center sm:text-left">

                    <p className="text-xs text-gray-400 uppercase">
                      {product.category}
                    </p>

                    <h3 className="font-semibold text-gray-800 mt-1">
                      {product.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {product.description?.slice(0, 60)}...
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Quantity: {product.quantity}
                    </p>

                  </div>


                  {/* PRICE */}
                  <div className="text-center">

                    <p className="text-sm text-gray-500">
                      ${product.price} × {product.quantity}
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* DELIVERY INFORMATION */}
            <div className="bg-white border rounded-xl p-6">

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Delivery Information
              </h2>

              <div>

                <p className="font-medium text-gray-800">
                  Standard Delivery
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Estimated delivery in 3–5 business days
                </p>

                <p className="text-sm text-green-600 font-medium mt-1">
                  Shipping: ${shipping.toFixed(2)}
                </p>

              </div>

            </div>


            {/* SECURE PAYMENT */}
            <div className="bg-white border rounded-xl p-6">

              <h3 className="font-semibold text-gray-800">
                Safe & Secure Payment
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Your payment details are protected with secure encryption.
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white border rounded-xl p-6 sticky top-6">

              <h2 className="text-xl font-semibold text-gray-800">
                Order Summary
              </h2>


              <div className="border-b my-5"></div>


              {/* SUBTOTAL */}
              <div className="flex justify-between text-sm mb-4">

                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="text-gray-800">
                  ${subtotal.toFixed(2)}
                </span>

              </div>


              {/* SHIPPING */}
              <div className="flex justify-between text-sm mb-4">

                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="text-gray-800">
                  ${shipping.toFixed(2)}
                </span>

              </div>


              {/* ITEMS */}
              <div className="flex justify-between text-sm mb-4">

                <span className="text-gray-500">
                  Items
                </span>

                <span className="text-gray-800">
                  {products.reduce(
                    (total, product) => total + product.quantity,
                    0
                  )}
                </span>

              </div>


              <div className="border-b my-5"></div>


              {/* TOTAL */}
              <div className="flex justify-between items-center">

                <span className="text-lg font-semibold text-gray-800">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </span>

              </div>


              {/* PAYMENT METHODS */}
              <div className="mt-7">

                <h3 className="font-semibold text-gray-800 mb-3">
                  Payment Method
                </h3>


                {/* CARD */}
                <div className="border-2 border-yellow-400 bg-yellow-50 rounded-lg p-4">

                  <div className="flex items-center gap-3">

                    <span className="text-xl">
                      💳
                    </span>

                    <div>

                      <p className="font-medium text-gray-800">
                        Card Payment
                      </p>

                      <p className="text-xs text-gray-500">
                        Visa / Mastercard / RuPay
                      </p>

                    </div>

                  </div>

                </div>


                {/* UPI */}
                <div className="border rounded-lg p-4 mt-3 hover:bg-gray-50 cursor-pointer">

                  <div className="flex items-center gap-3">

                    <span className="text-xl">
                      📱
                    </span>

                    <div>

                      <p className="font-medium text-gray-800">
                        UPI Payment
                      </p>

                      <p className="text-xs text-gray-500">
                        Google Pay / PhonePe / Paytm
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* PAY BUTTON */}
              <button
                onClick={click}
                className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold transition"
              >
                Pay ${total.toFixed(2)}
              </button>


              {/* BACK TO CART */}
              <button
                onClick={Click}
                className="w-full mt-3 border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-lg font-medium transition"
              >
                ← Back to Cart
              </button>


              <p className="text-center text-xs text-gray-400 mt-5">
                Secure checkout • Your payment is protected
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Carttwo;