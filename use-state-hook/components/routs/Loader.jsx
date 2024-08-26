//LOADER =>

/*
1. The loader method is used to load data before a perticular route is executed.
2. The loader method must return the data that is loaded or promise.
3. The data is aviavlable to the component and all the child components.
4. useLoaderData() => hook can be used to get the fetched data.
5. Loading state can also be used.
6. Loader accepts a method.
*/

//EXAMPLE =>

import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from './Home'
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
//import getLoader from "./loaderExmaple";

/*IN THIS EXAMPLE 
    { path:"/home", element:<Home/>, loader:getLoader},

    loader:getLoader => IT IS EXECUTED BEFORE THE /HOME ROUTE FIRE.
    We have to create a perticular component for it example =>  "./loaderExmaple"
*/

const route = createBrowserRouter([
    {
     path:'/',
     element:<Layout/>,
     children:[
       { path:"/home", element:<Home/>, loader:getLoader},
       { path:"/blogs", element:<Blogs/>},
       { path:"/contact", element:<Contact/>},
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