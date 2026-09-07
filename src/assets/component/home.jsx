import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[85vh] flex items-center px-5 sm:px-10 lg:px-20">

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-yellow-500 font-semibold text-lg mb-3">
              WELCOME TO SHOPEASY
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Shop Smart.
              <br />
              <span className="text-yellow-400">
                Live Better.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-lg">
              Discover amazing products at great prices.
              Shop your favorite items easily, quickly and securely.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/shop"
                className="bg-yellow-400 text-black font-semibold px-7 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 px-7 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300"
              >
                Learn More
              </Link>

            </div>
          </div>


          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-yellow-400 flex items-center justify-center">

                <div className="text-center">

                  <div className="text-7xl lg:text-8xl mb-4">
                    🛍️
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900">
                    ShopEasy
                  </h2>

                  <p className="text-gray-800 mt-2">
                    Everything you need
                  </p>

                </div>

              </div>


              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-2 sm:-left-5 bg-white shadow-xl rounded-xl px-6 py-4">

                <p className="text-gray-500 text-sm">
                  Best Deals
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  Up to 50% OFF
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="bg-white py-16 px-5 sm:px-10">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚚</div>

            <h3 className="text-xl font-bold">
              Fast Delivery
            </h3>

            <p className="text-gray-500 mt-2">
              Get your products delivered quickly.
            </p>
          </div>


          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔒</div>

            <h3 className="text-xl font-bold">
              Secure Payment
            </h3>

            <p className="text-gray-500 mt-2">
              Your payments are safe and secure.
            </p>
          </div>


          <div className="text-center p-6">
            <div className="text-4xl mb-4">⭐</div>

            <h3 className="text-xl font-bold">
              Quality Products
            </h3>

            <p className="text-gray-500 mt-2">
              We provide quality products at great prices.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="py-20 px-5 sm:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-yellow-500 font-semibold">
              EXPLORE
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Shop By Category
            </h2>

            <p className="text-gray-500 mt-3">
              Find everything you need in one place.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {/* Category 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

              <div className="text-6xl mb-5">
                👕
              </div>``

              <h3 className="text-xl font-bold">
                Fashion
              </h3>

              <p className="text-gray-500 mt-2">
                Latest styles
              </p>

            </div>


            {/* Category 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

              <div className="text-6xl mb-5">
                💻
              </div>

              <h3 className="text-xl font-bold">
                Electronics
              </h3>

              <p className="text-gray-500 mt-2">
                Smart technology
              </p>

            </div>


            {/* Category 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

              <div className="text-6xl mb-5">
                👟
              </div>

              <h3 className="text-xl font-bold">
                Footwear
              </h3>

              <p className="text-gray-500 mt-2">
                Walk in style
              </p>

            </div>


            {/* Category 4 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

              <div className="text-6xl mb-5">
                🏠
              </div>

              <h3 className="text-xl font-bold">
                Home
              </h3>

              <p className="text-gray-500 mt-2">
                Make it beautiful
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= POPULAR PRODUCTS ================= */}
      <section className="bg-white py-20 px-5 sm:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">

            <div>

              <p className="text-yellow-500 font-semibold">
                TRENDING NOW
              </p>

              <h2 className="text-4xl font-bold mt-2">
                Popular Products
              </h2>

            </div>

            <Link
              to="/shop"
              className="mt-5 sm:mt-0 text-yellow-500 font-semibold hover:text-yellow-600"
            >
              View All →
            </Link>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Product 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

              <div className="h-52 bg-gray-200 flex items-center justify-center text-7xl">
                👕
              </div>

              <div className="p-5">

                <p className="text-gray-500 text-sm">
                  Fashion
                </p>

                <h3 className="text-lg font-bold mt-1">
                  Premium T-Shirt
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold">
                    ₹499
                  </span>

                  <button className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
                    Add
                  </button>

                </div>

              </div>

            </div>


            {/* Product 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

              <div className="h-52 bg-gray-200 flex items-center justify-center text-7xl">
                🎧
              </div>

              <div className="p-5">

                <p className="text-gray-500 text-sm">
                  Electronics
                </p>

                <h3 className="text-lg font-bold mt-1">
                  Wireless Headphones
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold">
                    ₹1,499
                  </span>

                  <button className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
                    Add
                  </button>

                </div>

              </div>

            </div>


            {/* Product 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

              <div className="h-52 bg-gray-200 flex items-center justify-center text-7xl">
                👟
              </div>

              <div className="p-5">

                <p className="text-gray-500 text-sm">
                  Footwear
                </p>

                <h3 className="text-lg font-bold mt-1">
                  Running Shoes
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold">
                    ₹1,999
                  </span>

                  <button className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
                    Add
                  </button>

                </div>

              </div>

            </div>


            {/* Product 4 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

              <div className="h-52 bg-gray-200 flex items-center justify-center text-7xl">
                ⌚
              </div>

              <div className="p-5">

                <p className="text-gray-500 text-sm">
                  Accessories
                </p>

                <h3 className="text-lg font-bold mt-1">
                  Smart Watch
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold">
                    ₹2,499
                  </span>

                  <button className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
                    Add
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SPECIAL OFFER ================= */}
      <section className="py-20 px-5 sm:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="bg-yellow-400 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">

            <div>

              <p className="font-semibold text-gray-800">
                LIMITED TIME OFFER
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3">
                Get 50% OFF
              </h2>

              <p className="text-gray-800 mt-4 max-w-lg">
                Grab your favorite products before the offer ends.
                Don't miss out on our biggest deals.
              </p>

              <Link
                to="/shop"
                className="inline-block mt-7 bg-black text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Shop Deals
              </Link>

            </div>


            <div className="text-[120px] sm:text-[160px]">
              🛍️
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY SHOPEASY ================= */}
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-400 font-semibold">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Shopping Made Easy
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="text-center">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h3 className="text-xl font-bold">
                Fast & Simple
              </h3>

              <p className="text-gray-400 mt-3">
                Find your favorite products quickly with our simple
                shopping experience.
              </p>

            </div>


            <div className="text-center">

              <div className="text-5xl mb-5">
                💰
              </div>

              <h3 className="text-xl font-bold">
                Great Prices
              </h3>

              <p className="text-gray-400 mt-3">
                Enjoy amazing products at prices that fit your budget.
              </p>

            </div>


            <div className="text-center">

              <div className="text-5xl mb-5">
                ❤️
              </div>

              <h3 className="text-xl font-bold">
                Customer First
              </h3>

              <p className="text-gray-400 mt-3">
                Your satisfaction is our priority from shopping to delivery.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-5 sm:px-10 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-yellow-500 font-semibold">
              CUSTOMER REVIEWS
            </p>

            <h2 className="text-4xl font-bold mt-2">
              What Our Customers Say
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-7 rounded-2xl shadow-sm">

              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-5">
                "Amazing shopping experience. The products were exactly
                what I expected."
              </p>

              <div className="flex items-center gap-3 mt-6">

                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                  R
                </div>

                <div>
                  <h4 className="font-bold">
                    Rahul
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Verified Customer
                  </p>
                </div>

              </div>

            </div>


            <div className="bg-white p-7 rounded-2xl shadow-sm">

              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-5">
                "Very easy to use and the delivery was surprisingly fast.
                Definitely coming back."
              </p>

              <div className="flex items-center gap-3 mt-6">

                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                  A
                </div>

                <div>
                  <h4 className="font-bold">
                    Anjali
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Verified Customer
                  </p>
                </div>

              </div>

            </div>


            <div className="bg-white p-7 rounded-2xl shadow-sm">

              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-5">
                "Great prices and quality products. ShopEasy has become
                my favorite place to shop."
              </p>

              <div className="flex items-center gap-3 mt-6">

                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                  V
                </div>

                <div>
                  <h4 className="font-bold">
                    Vikram
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Verified Customer
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}
      <section className="bg-white py-20 px-5">

        <div className="max-w-4xl mx-auto text-center">

          <div className="text-5xl mb-5">
            📩
          </div>

          <h2 className="text-4xl font-bold">
            Stay In The Loop
          </h2>

          <p className="text-gray-500 mt-3">
            Subscribe to get updates about new products and special offers.
          </p>


          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mt-8">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />

            <button
              className="bg-yellow-400 px-7 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white px-5 sm:px-10 py-14">

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>

            <h2 className="text-2xl font-extrabold">
              Shop<span className="text-yellow-400">Easy</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Your simple destination for quality products
              at great prices.
            </p>

          </div>


          <div>

            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/shop">
                Shop
              </Link>

              <Link to="/cart">
                Cart
              </Link>

            </div>

          </div>


          <div>

            <h3 className="font-bold text-lg mb-4">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>Fashion</p>
              <p>Electronics</p>
              <p>Footwear</p>
              <p>Home</p>

            </div>

          </div>


          <div>

            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <div className="text-gray-400 space-y-3">

              <p>📧 support@shopeasy.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 India</p>

            </div>

          </div>

        </div>


        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">

          © 2026 ShopEasy. All rights reserved.

        </div>

      </footer>

    </div>
  );
};

export default Home;