import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="service">Service</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <hr />
      <Outlet />
      <hr />
      www.mycompney.com
    </>
  );
};
export default Layout;
