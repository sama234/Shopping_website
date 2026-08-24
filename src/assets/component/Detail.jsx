import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
 const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const {id}=useParams()
  const navigate=useNavigate()

  useEffect(() => {
    const full = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        console.log(response);
        const result = await response.json();
        console.log("resultt",result)
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    full();
  },[id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        
        {/* Back Button */}
      
        {/* Product Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Product Image */}
            <div className="flex min-h-[450px] items-center justify-center bg-gray-50 p-8 md:p-12">
              <img
                src={data.images?.[0]}
                alt=""
                className="h-[400px] w-full object-contain transition duration-300 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center p-8 md:p-12">

              {/* Category */}
              <span className="mb-4 w-fit rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold capitalize text-indigo-600">
                {data.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                {data.title}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="text-xl text-yellow-400">★</span>
                  <span className="font-semibold text-gray-800">
                    {data.rating}
                  </span>
                </div>

                <span className="text-gray-400">|</span>

               <span className="text-sm text-gray-500">
  {data.reviews?.length || 0} Reviews
</span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${data.price}
                </span>
              </div>

              {/* Description */}
              <div className="mt-7">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Description
                </h2>

                <p className="text-sm leading-7 text-gray-500">
                  {data.description}
                </p>
              </div>

              {/* Quantity */}
              {/* <div className="mt-7">
                <h2 className="mb-3 text-sm font-semibold text-gray-900">
                  Quantity
                </h2> */}

                <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
                  <button className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100">
                    −
                  </button>

                  <span className="border-x border-gray-300 px-5 py-2 font-semibold">
                    1
                  </span>

                  <button className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100">
                    +
                  </button>
                </div>
                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
                  Add to Cart
                </button>

                <button className="flex-1 rounded-xl border-2 border-indigo-600 px-6 py-3.5 font-semibold text-indigo-600 transition hover:bg-indigo-50 active:scale-95">
                  Buy Now
                </button>
              </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button disabled={id==1} onClick={()=>{
                        navigate(`/detail/${Number(id) -1}`)
                }} className="flex-1 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
                 Previous
                </button>

                <button onClick={()=>{
                        navigate(`/detail/${Number(id) +1}`)
                }} className="flex-1 rounded-xl border-2 border-indigo-600 px-6 py-3.5 font-semibold text-indigo-600 transition hover:bg-indigo-50 active:scale-95">
                  Next 
                </button>
              </div>
                <Link to="/shop"><button className="mb-6 mt-4 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-indigo-600">
          ← Back to Products
        </button> </Link>
              </div>

              {/* Buttons */}
             
             




              {/* Delivery Info */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    🚚 Free Delivery
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Delivery within 3-5 days
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    ↩ Easy Returns
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    30 days return policy
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Detail;
