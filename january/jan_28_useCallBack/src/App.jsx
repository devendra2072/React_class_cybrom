// import Usememo from "./Usememo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
// import Service from "./pages/Service";

const App = () => {
  return (
    <>
      {/* < Usememo/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/abtcompany/:cname" element={<Company />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
