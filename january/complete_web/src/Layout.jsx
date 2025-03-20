



import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link> |
          <hr />
          <Outlet />
          <hr/>
          www.yahoo.com
        </>
    )
}

export default Layout;