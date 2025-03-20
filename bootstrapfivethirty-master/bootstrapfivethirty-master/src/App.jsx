import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import PayComplete from "./pages/PayComplete";

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
           
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;