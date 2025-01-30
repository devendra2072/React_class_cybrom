import { Link, Outlet } from "react-router-dom"


function Layout() {
  return (
    <>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Outlet/>
       
      
      </>
  )
}

export default Layout
