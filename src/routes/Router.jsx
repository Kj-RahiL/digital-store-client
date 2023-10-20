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
          path: '/brandProduct/:brandName' ,
          element: <Home></Home> ,
          loader: (params)=> fetch(`http://localhost:8000/product/${params.brandName}`)
          
        },
        {
          path: '/addProduct' ,
          element: <AddProduct></AddProduct> 
        },
        {
          path: '/myCart' ,
          element: <MyCart></MyCart> 
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
          path:'/contact',
          element:<ContactInfo></ContactInfo>
      },
      {
          path:'/brandProduct',
          element:<BrandProduct></BrandProduct>
      }
      ]
    },
  ]);

export default router;