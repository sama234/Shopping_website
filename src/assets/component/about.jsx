
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaHeart,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* About Header */}
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm font-medium text-yellow-600">
            About ShopEasy
          </p>

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Shopping for everyday life, made easier.
              </h1>

              <p className="mt-6 leading-7 text-gray-600">
                ShopEasy is an online shopping platform built to make finding
                the things you need a little easier. Browse different products,
                explore your options, and shop at your own pace.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We believe shopping online should be simple. No confusing
                layouts or unnecessary steps, just a straightforward way to
                discover products.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-300"
              >
                Browse Products
              </Link>
            </div>

            <div className="rounded-2xl bg-gray-100 p-8 md:p-12">
              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  A better way to shop.
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  From browsing products to adding items to your cart, we want
                  every part of the shopping experience to feel clear and easy
                  to understand.
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-lg font-semibold text-gray-900">
                  ShopEasy
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Shop smart. Live better.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-y border-gray-100 bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Why we built ShopEasy
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Online shopping has become a part of everyday life, but a good
            experience still matters. Finding a product should be easy, product
            details should be clear, and the whole process should make sense.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            That's the idea behind ShopEasy. We're building a place where
            people can browse products, find what they're looking for, and
            manage their shopping without making things complicated.
          </p>

        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <p className="text-sm font-medium text-yellow-600">
              What matters to us
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              The way we do things
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              We focus on the basics that make online shopping a better
              experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="border-t-2 border-yellow-400 bg-gray-50 p-6">
              <FaBoxOpen className="text-2xl text-gray-800" />

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Product Variety
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore different products and find options that suit your
                everyday needs.
              </p>
            </div>

            <div className="border-t-2 border-yellow-400 bg-gray-50 p-6">
              <FaHeart className="text-2xl text-gray-800" />

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Customer Focus
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We want the website to be easy to use and simple to navigate.
              </p>
            </div>

            <div className="border-t-2 border-yellow-400 bg-gray-50 p-6">
              <FaShieldAlt className="text-2xl text-gray-800" />

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Clear Information
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Product information should be easy to find and understand.
              </p>
            </div>

            <div className="border-t-2 border-yellow-400 bg-gray-50 p-6">
              <FaTruck className="text-2xl text-gray-800" />

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Easy Shopping
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Browse products and manage your cart without unnecessary
                complications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-2xl bg-gray-900 px-8 py-12 text-white md:flex md:items-center md:justify-between md:px-12">

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Have a look around.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-gray-300">
              Take your time, explore our products, and see if you find
              something you like.
            </p>
          </div>

          <Link
            to="/shop"
            className="mt-6 inline-block whitespace-nowrap rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-300 md:mt-0"
          >
            Start Shopping
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;
