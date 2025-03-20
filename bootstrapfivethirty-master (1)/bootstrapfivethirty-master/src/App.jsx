import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import PayComplete from "./pages/PayComplete";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import SmartPhone from "./pages/SmartPhone";
import KeypadPhone from "./pages/KeypadPhone";
import AndroidPhone from "./pages/AndroidPhone";

const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="paycomplete" element={<PayComplete/>}/>
            <Route path="prodetail/:id" element={<ProductDetail/>}/>
            <Route path="search" element={<Search/>} />
            <Route path="smartphone" element={<SmartPhone/>}/>
            <Route path="keypad" element={<KeypadPhone/>} />
            <Route path="android" element={<AndroidPhone/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;