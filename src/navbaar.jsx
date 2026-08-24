import { Link, NavLink } from "react-router-dom";

const Navbaar =()=>{
     const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },

  ];
    return(
        <>
      
         <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200">
        <div className="text-2xl font-bold text-gray-800">
          MyStore
        </div>
        <div className="flex gap-8">
          
        
           <Link to="/"className="text-gray-700 hover:text-black transition">Home</Link>
           <Link to="/About"className="text-gray-700 hover:text-black transition">About</Link>
           <Link to="/Shop"className="text-gray-700 hover:text-black transition">Shop</Link>
           <Link to="/Cart"className="text-gray-700 hover:text-black transition">Cart</Link>
        </div>
      </nav>
  
        
        </>
    )
}
export default Navbaar