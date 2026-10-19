import { useState } from "react";

const Paymentpop= () => {

  const [addressType, setAddressType] = useState("Home");
  const [delivery, setDelivery] = useState("Standard");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Delivery details saved successfully!");
  };

  const subtotal = products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );


  const shipping = 20;

  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">


        {/* ================= HEADER ================= */}

        <div className="text-center mb-10">

          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            ShopEasy Checkout
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Delivery Details
          </h1>

          <p className="text-gray-500 mt-3">
            Tell us where you'd like your order delivered.
          </p>

        </div>


        {/* ================= PROGRESS ================= */}

        <div className="max-w-3xl mx-auto mb-10">

          <div className="flex items-center justify-between">

            {/* Step 1 */}
            <div className="flex flex-col items-center">

              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                1
              </div>

              <span className="text-sm font-semibold mt-2">
                Delivery
              </span>

            </div>


            {/* Line */}
            <div className="h-1 bg-yellow-400 flex-1 mx-4"></div>


            {/* Step 2 */}
            <div className="flex flex-col items-center">

              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                2
              </div>

              <span className="text-sm text-gray-400 mt-2">
                Payment
              </span>

            </div>


            {/* Line */}
            <div className="h-1 bg-gray-200 flex-1 mx-4"></div>


            {/* Step 3 */}
            <div className="flex flex-col items-center">

              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                3
              </div>

              <span className="text-sm text-gray-400 mt-2">
                Complete
              </span>

            </div>

          </div>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


          {/* ================= LEFT FORM ================= */}

          <div className="lg:col-span-2">

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            >

              {/* Contact Information */}

              <div className="mb-8">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    👤
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Contact Information
                    </h2>

                    <p className="text-sm text-gray-500">
                      We'll use this information to contact you.
                    </p>
                  </div>

                </div>


                {/* Name */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>

                </div>


                {/* Email + Phone */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>

                </div>

              </div>


              {/* ================= ADDRESS ================= */}

              <div className="border-t border-gray-100 pt-8">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    📍
                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Address
                    </h2>
/
                    <p className="text-sm text-gray-500">
                      Where should we deliver your order?
                    </p>

                  </div>

                </div>


                {/* Address */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address
                  </label>

                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />

                </div>


                {/* Apartment */}

                <div className="mt-5">

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apartment / Building
                    <span className="text-gray-400 font-normal">
                      {" "} (Optional)
                    </span>
                  </label>

                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />

                </div>


                {/* City State Pincode */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />

                  </div>

                </div>


                {/* Address Type */}

                <div className="mt-7">

                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Address Type
                  </label>

                  <div className="grid grid-cols-2 gap-4">

                    <button
                      type="button"
                      onClick={() => setAddressType("Home")}
                      className={`p-4 rounded-xl border text-left transition ${
                        addressType === "Home"
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-xl mb-1">
                        🏠
                      </div>

                      <p className="font-semibold">
                        Home
                      </p>

                      <p className="text-xs text-gray-500">
                        Deliver to my home
                      </p>

                    </button>


                    <button
                      type="button"
                      onClick={() => setAddressType("Work")}
                      className={`p-4 rounded-xl border text-left transition ${
                        addressType === "Work"
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-xl mb-1">
                        🏢
                      </div>

                      <p className="font-semibold">
                        Work
                      </p>

                      <p className="text-xs text-gray-500">
                        Deliver to my workplace
                      </p>

                    </button>

                  </div>

                </div>

              </div>


              {/* ================= DELIVERY OPTION ================= */}

              <div className="border-t border-gray-100 mt-8 pt-8">

                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Delivery Method
                </h2>


                <div className="space-y-4">

                  {/* Standard */}

                  <button
                    type="button"
                    onClick={() => setDelivery("Standard")}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition ${
                      delivery === "Standard"
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="text-2xl">
                        🚚
                      </div>

                      <div className="text-left">

                        <p className="font-semibold">
                          Standard Delivery
                        </p>

                        <p className="text-sm text-gray-500">
                          Delivery within 4–6 business days
                        </p>

                      </div>

                    </div>

                    <span className="font-bold">
                      $20
                    </span>

                  </button>


                  {/* Express */}

                  <button
                    type="button"
                    onClick={() => setDelivery("Express")}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition ${
                      delivery === "Express"
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="text-2xl">
                        ⚡
                      </div>

                      <div className="text-left">

                        <p className="font-semibold">
                          Express Delivery
                        </p>

                        <p className="text-sm text-gray-500">
                          Delivery within 1–2 business days
                        </p>

                      </div>

                    </div>

                    <span className="font-bold">
                      $40
                    </span>

                  </button>

                </div>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg mt-8 hover:bg-yellow-500 transition shadow-sm"
              >
                Continue to Payment →
              </button>


              {/* Security */}

              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-5">
                🔒 Secure & encrypted checkout
              </div>

            </form>

          </div>


          {/* ================= ORDER SUMMARY ================= */}

          <div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">

              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>


              {/* Product 1 */}

              <div className="flex items-center gap-4 pb-5 border-b">

                <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="flex-1">

                  <p className="font-semibold text-sm">
                    Hoodie with pouch pocket
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Qty: 1
                  </p>

                </div>

                <span className="font-semibold">
                  $75
                </span>

              </div>


              {/* Product 2 */}

              <div className="flex items-center gap-4 py-5 border-b">

                <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="flex-1">

                  <p className="font-semibold text-sm">
                    Classic T-Shirt
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Qty: 1
                  </p>

                </div>

                <span className="font-semibold">
                  $75
                </span>

              </div>


              {/* Prices */}

              <div className="space-y-4 mt-6">

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span>
                    $150.00
                  </span>

                </div>


                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Shipping
                  </span>

                  <span>
                    {delivery === "Standard" ? "$20.00" : "$40.00"}
                  </span>

                </div>


                <div className="border-t pt-5 flex justify-between">

                  <span className="font-bold text-lg">
                    Total
                  </span>

                  <span className="font-extrabold text-xl">
                    {delivery === "Standard"
                      ? "$170.00"
                      : "$190.00"}
                  </span>

                </div>

              </div>


              {/* Benefits */}

              <div className="mt-7 bg-yellow-50 rounded-xl p-4">

                <p className="font-semibold text-sm">
                  ✨ Why ShopEasy?
                </p>

                <ul className="text-xs text-gray-600 mt-3 space-y-2">

                  <li>✓ Secure payment</li>
                  <li>✓ Easy returns</li>
                  <li>✓ Order tracking</li>
                  <li>✓ Customer support</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Paymentpop;