import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbaar from "./navbaar"
import About from "./assets/component/about"
import Shop from "./assets/component/shop"
import Cart from "./assets/component/cart"
import Nopage from "./Nopage"
import Home from "./assets/component/home"
import Detail from "./assets/component/Detail"



const app=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbaar/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/*" element={<Nopage/>}/>
<Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default app