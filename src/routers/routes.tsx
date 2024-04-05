import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Home } from '../pages/home'
import { Cart } from '../pages/cart'
import { PurchatFinish } from '../pages/purchaseFihish'



const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/carts",
    element: <Cart/>,
  },
  {
    path: "/purchetFinish",
    element: <PurchatFinish/>,
  },
]);




export const Router = () => {
  return (
    <RouterProvider router={routers} />
  )
}