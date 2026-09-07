import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center px-6 overflow-hidden relative">

    {/* Background Effects */}
      <div className="absolute w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-orange-300/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>
      <div className="relative text-center max-w-lg">

    {/* 404 */}
    <h1 className="text-[120px] sm:text-[160px] font-extrabold text-yellow-400 leading-none drop-shadow-lg animate-bounce">404</h1>

    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">Oops! Page Not Found</h2>

    {/* Description */}
    <p className="text-gray-500 mt-4 text-lg">The page you're looking for doesn't exist or may have been moved.</p>

    {/* Button */}
    <Link to="/" className="inline-block mt-8 bg-yellow-400 text-black font-semibold px-7 py-3 rounded-xl shadow-md hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" >← Go Back Home</Link>
    
      </div>
    </div>
  );
};

export default NoPage;