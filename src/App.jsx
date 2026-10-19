import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbaar from "./navbaar"
import About from "./assets/component/about"
import Shop from "./assets/component/shop"
import Cart from "./assets/component/cart"
import Nopage from "./Nopage"
import Home from "./assets/component/home"
import Detail from "./assets/component/Detail"
import Login from "./assets/component/Login"
import Parent from "./props/Prop"
import Page from "./assets/component/page"
import Carttwo from "./assets/carttwo"
import Paymentpop from "./assets/paymentpop"
import Newcart from "./assets/component/newcart"
import BuyNow from "./assets/component/buynow"
import Back from "./BACK"
import Userdetail from "./userdetail"
import Login12 from "./assets/component/testlogin"
import Adminproductinput from "./assets/component/adminproductinput"
import Adminall from "./assets/component/adminall"
import ScrollToTop from "./ScrollToTop"



const app=()=>{
  function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Keep your existing navbar and routes here */}
    </div>
  );
}

  return(
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbaar/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/category/:category" element={<Shop/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/*" element={<Nopage/>}/>
<Route path="/detail/:id" element={<Detail/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/parent" element={<Parent/>}/>
<Route path="/page" element={<Page/>}/>
<Route path="/carttwo" element={<Carttwo/>}/> 
<Route path="/paymentpop" element={<Paymentpop/>}/>
<Route path="/newcart" element={<Newcart/>}/>
<Route path="/buynow/:id" element={<BuyNow />}/>
<Route path="/userdetail" element={<Userdetail/>}/>
<Route path="/back" element={<Back/>}/>
<Route path="/login2" element={<Login12/>}/> 
<Route path="/adminproductinput" element={<Adminproductinput/>}/> 
<Route path="/adminall" element={<Adminall/>}/>

    </Routes>
    </BrowserRouter>
    </>
    
  )
}
export default app