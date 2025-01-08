import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Service from "./componentes/Service";
import Contact from "./componentes/Contact";
import Nopage from "./componentes/Nopage";
import AboutCompany from "./componentes/AboutCompany";
import AboutContact from "./componentes/AboutContact";
import AboutService from "./componentes/AboutService";

// console.log(Home.apply(2).name)

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />}>
            <Route index element={<AboutCompany />} />
              <Route path="aboutcompany" element={<AboutCompany />} />
              <Route path="aboutcontact" element={<AboutContact />} />
              <Route path="aboutservice" element={<AboutService />} />
              
            </Route>
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
