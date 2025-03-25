// import Usememo from "./Usememo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Join from "./pages/Join";
import MyCompany from "./pages/MyCompany";
import MyJoining from "./pages/Myjoining";
const App = () => {
  return (
    <>
      {/* < Usememo/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="join" element={<Join />} />
            <Route path="service" element={<Service />} />
            <Route path="mycompany/:mycomp" element={<MyCompany />} />
            <Route path="myjoining/:id" element={<MyJoining />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
