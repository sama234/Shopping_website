import axios from "axios"
import { useEffect, useState } from "react"

const Back=()=>{
    const [data,setdata]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const full=async()=>{
            try{
                const respose=await axios.get("http://localhost:4000/api/products/getallproducts/")
                console.log("resposeeee",respose.data.product)
                setdata(respose.data.product)
                setLoading(false)

            }
            catch(error){
                console.log(error)
            }

        }
        full()

    },[])
    if(loading) {
        return <p>loading..</p>
    }
    return(
        <div className="mt-20">
           <h1>Product</h1>

           <div className="grid grid-cols-3">
            {
                data.map((item)=>(
                    <div key={item._id}>
                        <p>name..{item.name}</p>
                        <h1>{item.brand}</h1>
                        <span>{item.price}</span>

                    </div>
                ))
            }
           </div>
        </div>
    )
}
export default Back