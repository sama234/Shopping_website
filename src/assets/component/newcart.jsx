import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addquantity,
  removequantity,
  removefromcart,
  clearcart
} from "../../slice/cartslice";


const Newcart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.cart.item
  );


  const click = () => {
    navigate("/carttwo");
  };


  // EMPTY CART
  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

        <div className="text-center bg-white p-10 rounded-xl shadow-sm">

          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mb-6">
            Add some products to your cart.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    );
  }


  // SUBTOTAL
  const subtotal = products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );


  const shipping = 5.99; // Fixed shipping cost

  const total = subtotal + shipping;


  return (

    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">


        {/* HEADING */}

        <div className="text-center mb-10">

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Shop &nbsp;›&nbsp; Shopping Cart
          </p>

        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


          {/* LEFT */}

          <div className="lg:col-span-2">


            <div className="text-sm text-gray-600 border-b pb-5 mb-5">

              ✓ You have {products.length} item
              {products.length > 1 ? "s" : ""} in your cart

            </div>



            {/* PRODUCTS */}

            {products.map((product) => (

              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-center gap-5 border-b pb-7 mb-7"
              >


                {/* IMAGE */}

                <div className="w-28 h-32 bg-gray-100 rounded-lg overflow-hidden">

                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />

                </div>



                {/* INFORMATION */}

                <div className="flex-1 text-center sm:text-left">

                  <p className="text-xs text-gray-400 uppercase">
                    {product.category}
                  </p>

                  <h2 className="font-semibold text-gray-900 mt-1">
                    {product.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {product.description?.slice(0, 50)}...
                  </p>

                  <p className="font-semibold text-gray-900 mt-2">
                    ${product.price}
                  </p>

                </div>



                {/* QUANTITY */}

                <div className="flex items-center border border-gray-200 rounded-md">

                  <button
                    onClick={() =>
                      dispatch(removequantity(product.id))
                    }
                    className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                  >
                    −
                  </button>


                  <span className="px-4 font-semibold">
                    {product.quantity}
                  </span>


                  <button
                    onClick={() =>
                      dispatch(addquantity(product.id))
                    }
                    className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>



                {/* TOTAL FOR PRODUCT */}

                <div className="font-semibold text-gray-900 min-w-[70px] text-center">

                  $
                  {(product.price * product.quantity).toFixed(2)}

                </div>



                {/* REMOVE */}

                <button
                  onClick={() =>
                    dispatch(removefromcart(product.id))
                  }
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  Remove
                </button>


              </div>

            ))}



            {/* CLEAR CART */}

            <button
              onClick={() => dispatch(clearcart())}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear Cart
            </button>


          </div>



          {/* RIGHT SIDE */}

          <div className="lg:border-l lg:pl-8">


            <h2 className="text-xl font-bold text-gray-900 mb-7">
              Summary
            </h2>



            {/* SUBTOTAL */}

            <div className="flex justify-between text-sm mb-5">

              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-medium">
                ${subtotal.toFixed(2)}
              </span>

            </div>



            {/* SHIPPING */}

            <div className="flex justify-between text-sm mb-5">

              <span className="text-gray-500">
                Shipping
              </span>

              <span className="font-medium">
                ${shipping.toFixed(2)}
              </span>

            </div>



            {/* TOTAL */}

            <div className="border-t pt-5 flex justify-between">

              <span className="font-bold">
                Total
              </span>

              <span className="font-bold text-lg">
                USD ${total.toFixed(2)}
              </span>

            </div>



            {/* COUPON */}

            <div className="mt-7">

              <input
                type="text"
                placeholder="Enter coupon code here"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />

            </div>



            {/* CHECKOUT */}

            <button
              onClick={click}
              className="w-full bg-black text-white py-3 rounded-md mt-4 font-semibold hover:bg-gray-800 transition"
            >
              Check Out
            </button>



            {/* CONTINUE SHOPPING */}

            <button
              onClick={() => navigate("/shop")}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-md mt-3 font-semibold hover:bg-gray-100 transition"
            >
              Continue Shopping
            </button>


          </div>

        </div>

      </div>

    </div>

  );
};

export default Newcart;