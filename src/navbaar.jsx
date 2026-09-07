import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "./SerchProvider";

const Navbaar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const click = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const { search, setSearch } = useContext(SearchContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md">

      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-5">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-900">
          <button
            onClick={click}
            className="bg-transparent"
          >
            Shop<span className="text-yellow-400">Easy</span>
          </button>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">

          <Link
            to="/about"
            className="text-gray-700 hover:text-black transition"
          >
            About
          </Link>

          <Link
            to="/shop"
            className="text-gray-700 hover:text-black transition"
          >
            Shop
          </Link>

          {/* Search */}
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-32 lg:w-48 h-9 px-3 border border-gray-300 rounded-xl outline-none focus:border-yellow-400"
          />

          <Link
            to="/cart"
            className="text-gray-700 hover:text-black transition"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Login
          </Link>

        </div>


        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-5 pb-6">

          <div className="flex flex-col gap-5">

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-black"
            >
              About
            </Link>

            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-black"
            >
              Shop
            </Link>

            {/* Mobile Search */}
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-xl outline-none focus:border-yellow-400"
            />

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-black"
            >
              Cart
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-fit bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Login
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbaar;