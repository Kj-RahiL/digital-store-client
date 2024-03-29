import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignUp from "../Users-Login/SignUp";
import LogIn from "../Users-Login/LogIn";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import ContactInfo from "../Pages/Contact/ContactInfo";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import Details from "../Pages/BrandProduct/Details/Details";
import Update from "../Pages/BrandProduct/Update/Update";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import ServiceCheckOut from "../Pages/Service/ServiceCheckOut";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
          path: '/' ,
          element: <Home></Home> ,
          loader: ()=> fetch('/band.json'),
          
        },
       
        {
          path: '/addProduct' ,
          element: <PrivateRoute><AddProduct></AddProduct> </PrivateRoute>
        },
        {
          path: '/myCart' ,
          element: <PrivateRoute><MyCart></MyCart> </PrivateRoute>,
          loader: ()=>fetch('https://digital-store-server-aqarlthqi-rahis-projects.vercel.app/myCart')
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
      },
      {
          path:'/signUp',
          element:<SignUp></SignUp>
      },
      {
          path:'/service',
          element:<Service></Service>
      },
      {
          path:'/checkoutService/:id',
          element:<ServiceCheckOut></ServiceCheckOut>,
          loader: ({params})=>fetch(`http://localhost:8000/services/${params.id}`)
      },
      {
          path:'/blog',
          element:<Blog></Blog>
      },
      {
          path:'/contact',
          element:<Contact></Contact>
      },
      {
          path:'/brandProduct/:brandName',
          element:<BrandProduct></BrandProduct>,
          loader: ({ params })=> fetch(`/band.json/${params.brandName}`)
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://digital-store-server-aqarlthqi-rahis-projects.vercel.app/details/${params.id}`)
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://digital-store-server-aqarlthqi-rahis-projects.vercel.app/updateProduct/${params.id}`)
      },
      ]
    },
  ]);

export default router;