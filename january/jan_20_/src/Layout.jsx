import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return (
        <>
        <Link to="home" >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="insert" >Insert</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="display" >Display</Link>
        <Link to="search" > Search</Link>
        <hr />
        <Outlet />

        <hr />
        www.yahoo.com
        </>
    )
}
export default Layout;