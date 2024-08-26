import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from './Home'
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

// index => defines Home Page.
// *     => defines No Page found.
/*         <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}/>
                <Route index element={<Home/>} />
                <Route path="blogs" element={<Blogs/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </BrowserRouter>
        </>
*/ 


const route = createBrowserRouter([
   {
    path:'/',
    element:<Layout/>,
    children:[
      { path:"home", element:<Home/>},
      { path:"blogs", element:<Blogs/>},
      { path:"contact", element:<Contact/>},
      { path:"*", element:<NoPage/>},
    ]
  }
])


const Nav = ()=>{

console.log("Navbar")

    return(
        <RouterProvider router={route}></RouterProvider>
    )
}

export default Nav