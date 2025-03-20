import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./Layout";


const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            {/* <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="search" element={<Search/>} />
            <Route path="update" element={<Update/>}/>
            <Route path="editdata/:id" element={<EditData/>} /> */}
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;

