import axios from "axios";
import { useEffect, useState } from "react";

const Userdetail = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const full = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/getall/"
        );

        console.log("response", response.data.user);

        setdata(response.data.user);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    full();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-5 sm:px-8 lg:px-12">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              Dashboard
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              Users
            </h1>

            <p className="text-gray-500 mt-2">
              Manage and view all registered users.
            </p>
          </div>

          {/* User count */}
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">
              {data.length}
            </p>
          </div>

        </div>
      </div>

      {/* User Cards */}
      <div className="max-w-7xl mx-auto">

        {data.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <p className="text-gray-500">
              No users found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {data.map((item) => (
              <div
                key={item._id}
                className="
                  bg-white
                  rounded-2xl
                  border border-gray-200
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">

                  <div
                    className="
                      w-14 h-14
                      rounded-full
                      bg-black
                      text-white
                      flex
                      items-center
                      justify-center
                      text-xl
                      font-bold
                    "
                  >
                    {item.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      User ID: {item._id}
                    </p>
                  </div>

                </div>

                {/* Details */}
                <div className="space-y-4">

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      📧
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase">
                        Email
                      </p>

                      <p className="text-sm font-medium text-gray-800 break-all">
                        {item.email}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      📱
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase">
                        Phone
                      </p>

                      <p className="text-sm font-medium text-gray-800">
                        {item.phone}
                      </p>
                    </div>
                  </div>

                  {/* Country */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      🌍
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase">
                        Country
                      </p>

                      <p className="text-sm font-medium text-gray-800">
                        {item.country}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">

                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                    Active
                  </span>

                  <button
                    className="
                      text-sm
                      font-medium
                      text-gray-600
                      hover:text-black
                      transition
                    "
                  >
                    View Details →
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Userdetail;