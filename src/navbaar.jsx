import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SearchContext } from "./SerchProvider";

import {
  FaShoppingBag,
  FaUserCircle,
  FaShoppingCart,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbaar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  // Remember the selected theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { search, setSearch } = useContext(SearchContext);

  // Apply the theme to the entire document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Switch between light and dark themes
  const toggleTheme = () => {
    setDarkMode((previousTheme) => !previousTheme);
  };

  // Update cart count
  useEffect(() => {
    const updateCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setTotalItems(cart.length);
      } catch {
        setTotalItems(0);
      }
    };

    updateCart();

    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener("storage", updateCart);
    };
  }, [location]);

  const click = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Search products when Enter is pressed
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (search.trim() !== "") {
        navigate("/shop");
        setMenuOpen(false);
      }
    }
  };

  // Open Shop page when the search button is clicked
  const submitSearch = () => {
    if (search.trim() !== "") {
      navigate("/shop");
      setMenuOpen(false);
    }
  };

  // Reusable dark theme button
  const ThemeButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light Mode" : "Dark Mode"}
      className="flex items-center justify-center gap-2
      w-11 h-11 rounded-full border
      border-gray-200 dark:border-gray-700
      bg-gray-100 dark:bg-gray-800
      text-gray-800 dark:text-yellow-400
      hover:bg-gray-200 dark:hover:bg-gray-700
      transition-all duration-300"
    >
      {darkMode ? (
        <FaSun className="text-lg" />
      ) : (
        <FaMoon className="text-lg" />
      )}
    </button>
  );

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      bg-white dark:bg-gray-900
      border-b border-gray-100 dark:border-gray-700
      shadow-sm transition-colors duration-300"
    >
      <div className="flex items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 py-4">

        {/* LOGO */}

        <div className="shrink-0 text-2xl font-extrabold text-gray-900 dark:text-white">
          <button onClick={click} className="bg-transparent">
            Shop<span className="text-yellow-400">Easy</span>
          </button>
        </div>

        {/* DESKTOP NAVBAR */}

        <div className="hidden md:flex flex-1 items-center justify-center gap-6">

          {/* NAVIGATION LINKS */}

          <div className="flex items-center gap-6 shrink-0">

            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-yellow-500 transition-colors"
            >
              About
            </Link>

            <Link
              to="/shop"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium hover:text-yellow-500 transition-colors"
            >
              <FaShoppingBag className="text-lg" />
              Shopping
            </Link>

          </div>

          {/* DESKTOP SEARCH BAR */}

          <div className="flex-1 max-w-xl">
            <div
              className="flex items-center w-full h-12 rounded-xl
              border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 px-4
              transition-all duration-300
              focus-within:border-yellow-400
              focus-within:shadow-md"
            >
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full bg-transparent outline-none
                text-sm text-gray-800 dark:text-white
                placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={submitSearch}
                className="text-gray-400 text-2xl hover:text-yellow-500 transition-colors"
                aria-label="Search products"
              >
                ⌕
              </button>
            </div>
          </div>

          {/* PROFILE */}

          <Link
            to="/login"
            className="flex items-center gap-2
            text-gray-700 dark:text-gray-200
            font-medium hover:text-yellow-500 transition-colors shrink-0"
          >
            <FaUserCircle className="text-xl" />
            <span>Profile</span>
          </Link>

          {/* DARK THEME BUTTON */}

          <ThemeButton />

        </div>

        {/* CART */}

        <div className="hidden md:flex shrink-0">
          <Link
            to="/newcart"
            className="relative flex items-center gap-2
            bg-yellow-400 text-black px-5 py-3 rounded-xl
            font-semibold hover:bg-yellow-500 hover:shadow-md
            transition-all duration-300"
          >
            <FaShoppingCart className="text-lg" />

            <span>Cart</span>

            <span
              className="absolute -top-2 -right-2 min-w-6 h-6
              flex items-center justify-center bg-black text-white
              px-1.5 rounded-full text-xs font-bold"
            >
              {totalItems}
            </span>
          </Link>
        </div>

        {/* MOBILE THEME BUTTON */}

        <div className="md:hidden">
          <ThemeButton />
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl
          text-gray-800 dark:text-white
          hover:text-yellow-500 transition"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className="md:hidden
          bg-white dark:bg-gray-900
          border-t border-gray-100 dark:border-gray-700
          px-5 py-5 shadow-lg transition-colors duration-300"
        >
          <div className="flex flex-col gap-5">

            {/* MOBILE SEARCH */}

            <div
              className="flex items-center h-11 rounded-xl
              border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 px-4
              focus-within:border-yellow-400"
            >
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full bg-transparent outline-none
                text-sm text-gray-800 dark:text-white
                placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={submitSearch}
                className="text-gray-500 dark:text-gray-300
                text-2xl hover:text-yellow-500"
                aria-label="Search products"
              >
                ⌕
              </button>
            </div>

            <Link
              to="/"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-yellow-500"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-yellow-500"
            >
              About
            </Link>

            <Link
              to="/shop"
              onClick={closeMenu}
              className="flex items-center gap-3
              text-gray-700 dark:text-gray-200
              font-medium hover:text-yellow-500"
            >
              <FaShoppingBag />
              Shopping
            </Link>

            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center gap-3
              text-gray-700 dark:text-gray-200
              font-medium hover:text-yellow-500"
            >
              <FaUserCircle />
              Profile
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-200
              font-medium hover:text-yellow-500"
            >
              Shop More
            </Link>

            <Link
              to="/newcart"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3
              bg-yellow-400 text-black px-5 py-3 rounded-xl
              font-semibold hover:bg-yellow-500"
            >
              <FaShoppingCart />
              Cart ({totalItems})
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbaar;