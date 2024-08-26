import { Outlet, Link } from "react-router-dom";


// <Link/> => By the use of links the full full page wont be loaded Only respective component is loaded. If we wont use it entire page loaded.

console.log("layout")
const Layout = () => {
  return (
    <>

      <nav style={{backgroundColor:'yellow'}}>
        <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-around'}}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </>
  )
};

export default Layout;