import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import MyCart from "../Pages/MyCart/MyCart";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addproduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
            path:'/mycart',
            element:<MyCart></MyCart>
        }
      ]
    },
  ]);
  export default router;