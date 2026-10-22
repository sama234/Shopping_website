import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTruckFast,
  FaShieldHalved,
  FaHeart,
  FaStar,
  FaInstagram,
 
} from "react-icons/fa6";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "THE EVERYDAY EDIT",
    title: "Good things,",
    accent: "good prices.",
    description:
      "Useful finds, everyday favourites, and a little something just for you.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "A FRESH LOOK",
    title: "Find your",
    accent: "own style.",
    description:
      "Explore pieces that fit your day, your plans, and your personality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "SMARTER EVERYDAY",
    title: "Little upgrades,",
    accent: "big difference.",
    description:
      "Discover practical tech and thoughtful essentials for daily life.",
  },
];

const categories = [
  {
    name: "Clothing",
    slug: "clothing",
    note: "Easy pieces for every day",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Electronics",
    slug: "electronics",
    note: "Things that make life easier",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Shoes",
    slug: "shoes",
    note: "Your next favourite pair",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Home & Living",
    slug: "home-living",
    note: "Make your space feel yours",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  },
];

const products = [
  {
    name: "Everyday Cotton T Shirt",
    category: "Clothing",
    price: "$19.99",
    label: "Easy favourite",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
  },
  
{
  name: "Sports Collection",
  category: "Sports",
  price: "$33.99",
  label: "Made for movement",
  image:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=85",
},
  {
    name: "Everyday Sneakers",
    category: "Footwear",
    price: "$79.99",
    label: "Ready to go",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Classic Wristwatch",
    category: "Accessories",
    price: "$29.99",
    label: "A little detail",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
  },
];

const reviews = [
  {
    quote:
      "The website was easy to use and my order arrived when I expected. I would shop here again.",
    name: "Rahul",
    detail: "Customer",
  },
  {
    quote:
      "Found what I needed without spending ages looking around. The whole experience felt simple.",
    name: "Anjali",
    detail: "Customer",
  },
  {
    quote:
      "Good options for everyday things and the prices were easy on my budget.",
    name: "Vikram",
    detail: "Customer",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setCurrentSlide(
      (currentSlide + direction + slides.length) % slides.length
    );
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#25251f]">
      {/* HERO */}
      <section className="px-4 pt-5 sm:px-7 lg:px-10">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden bg-[#dedbd2]">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>
          ))}

          <div className="relative flex min-h-[520px] items-center px-6 py-20 sm:min-h-[600px] sm:px-12 lg:min-h-[660px] lg:px-20">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d36b] sm:text-sm">
                {slides[currentSlide].eyebrow}
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                {slides[currentSlide].title}
                <br />
                <span className="font-normal italic text-[#f4d36b]">
                  {slides[currentSlide].accent}
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
                {slides[currentSlide].description}
              </p>

              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-3 bg-[#f4d36b] px-6 py-4 text-sm font-semibold text-[#25251f] transition hover:bg-white"
              >
                Have a look <FaArrowRight />
              </Link>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-3 sm:bottom-9 sm:right-10">
              <span className="mr-2 text-sm text-white">
                0{currentSlide + 1} / 0{slides.length}
              </span>
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center border border-white/70 text-xl text-white transition hover:bg-white hover:text-black"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center border border-white/70 text-xl text-white transition hover:bg-white hover:text-black"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL INTRO STRIP */}
      <section className="border-b border-[#e8e5dc] px-5 py-7 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#64645c] sm:flex-row sm:items-center sm:justify-between">
          <p>Shopping for real life, not just for the scroll.</p>
          <p>Good finds · Fair prices · Everyday favourites</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a8065]">
                Take a look around
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                What are you after?
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-2 border-b border-[#25251f] pb-1 text-sm font-semibold hover:text-[#8a8065]"
            >
              Browse the shop <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                to={`/category/${category.slug}`}
                key={category.name}
                className="group block"
              >
                <div className="relative h-[300px] overflow-hidden bg-[#e8e4dc] sm:h-[350px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[#fbfaf7] px-3 py-2 text-xs font-medium text-[#25251f]">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-[#dedbd2] py-4">
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="mt-1 text-sm text-[#77766d]">{category.note}</p>
                  </div>
                  <span className="pt-1 transition-transform group-hover:translate-x-1">
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="bg-[#f0eee7] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a8065]">
                Worth a closer look
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                A few popular picks.
              </h2>
              <p className="mt-3 max-w-xl text-[#6f6d64]">
                A small selection of everyday things people tend to come back for.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-2 border-b border-[#25251f] pb-1 text-sm font-semibold hover:text-[#8a8065]"
            >
              See all products <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="group">
                <Link to="/shop" className="block">
                  <div className="relative h-[300px] overflow-hidden bg-white sm:h-[340px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-[#fbfaf7] px-3 py-2 text-xs">
                      {product.label}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#77766d]">
                        {product.category}
                      </p>
                      <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
                    </div>
                    <p className="pt-5 text-base font-semibold">{product.price}</p>
                  </div>
                </Link>
                <Link
                  to="/shop"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-[#c9c6bc] px-4 py-3 text-sm font-semibold transition hover:border-[#25251f] hover:bg-[#25251f] hover:text-white"
                >
                  View product <FaArrowRight className="text-xs" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#d9dfd0] md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5e6b50]">
              A little treat
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Good finds.
              <br />
              Better prices.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#555b4e]">
              Check out the latest offers and find something useful, lovely,
              or simply too good to leave behind.
            </p>
            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-3 bg-[#25251f] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#45453c]"
            >
              Shop current offers <FaArrowRight />
            </Link>
          </div>
          <div className="min-h-[320px] overflow-hidden sm:min-h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85"
              alt="Shopping bags and a selection of products"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY SHOP HERE */}
      <section className="border-y border-[#e8e5dc] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-6">
          <div className="flex items-start gap-4">
            <FaTruckFast className="mt-1 text-2xl text-[#81775d]" />
            <div>
              <h3 className="font-semibold">Delivery made simple</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#77766d]">
                Clear order details and a straightforward shopping experience.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaShieldHalved className="mt-1 text-2xl text-[#81775d]" />
            <div>
              <h3 className="font-semibold">Shop with confidence</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#77766d]">
                We want checkout to feel clear, simple, and dependable.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaHeart className="mt-1 text-2xl text-[#81775d]" />
            <div>
              <h3 className="font-semibold">Everyday things you’ll love</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#77766d]">
                Useful products picked with everyday life in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER NOTES */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a8065]">
              Kind words
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              From shoppers like you.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex min-h-[240px] flex-col border border-[#e4e1d8] bg-white p-6 sm:p-8"
              >
                <div className="flex gap-1 text-sm text-[#b28d35]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-7 text-[#55554d]">
                  “{review.quote}”
                </p>
                <div className="mt-6 border-t border-[#e8e5dc] pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="mt-1 text-xs text-[#77766d]">{review.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#8b897f]">
            Sample review text — replace with genuine customer feedback when available.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#e9e6dc] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#81775d]">
            A note from us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            The good stuff, occasionally.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#69675e]">
            New arrivals, useful finds, and offers worth knowing about.
            No daily flood of emails.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              required
              className="min-w-0 flex-1 border border-[#d0ccc0] bg-[#fbfaf7] px-4 py-4 text-sm outline-none placeholder:text-[#929087] focus:border-[#25251f]"
            />
            <button
              type="submit"
              className="bg-[#25251f] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#45453c]"
            >
              Sign me up
            </button>
          </form>

          {subscribed && (
            <p className="mt-4 text-sm text-[#4f6748]">
              Thanks for your interest! Newsletter signup is currently a front-end demo.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#25251f] px-5 py-12 text-[#f7f5f0] sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block text-3xl font-semibold tracking-tight">
              Shop<span className="font-normal italic text-[#f4d36b]">Easy</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Everyday shopping, without making a big thing of it.
            </p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-[#f4d36b]"
            >
              <FaInstagram /> Follow along
            </a>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <Link className="hover:text-white" to="/">Home</Link>
              <Link className="hover:text-white" to="/shop">Shop all</Link>
              <Link className="hover:text-white" to="/about">About us</Link>
              <Link className="hover:text-white" to="/carttwo">Your cart</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Shop categories</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <Link className="hover:text-white" to="/shop">Clothing</Link>
              <Link className="hover:text-white" to="/shop">Electronics</Link>
              <Link className="hover:text-white" to="/shop">Shoes</Link>
              <Link className="hover:text-white" to="/shop">Home & Living</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Need a hand?</h3>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/60">
              <p>Questions about an order?</p>
              <a className="hover:text-white" href="mailto:support@shopeasy.com">
                support@shopeasy.com
              </a>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
          <p>Made for everyday shopping.</p>
        </div>
      </footer>
    </main>
  );
}
