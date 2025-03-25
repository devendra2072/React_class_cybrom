import { Link, Outlet } from "react-router-dom"


function Layout() {
  return (
    <>
    <Link to="home">Home</Link>     |
    <Link to="about">About</Link>    |
    <Link to="service">Service</Link>    |
    <Link to="join">Join</Link>   |
    <hr />
    <Outlet/>
    <hr />
    www.abc.com
       
      
      </>
  )
}

export default Layout
