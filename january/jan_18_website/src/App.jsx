import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Display from "./components/Display";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
