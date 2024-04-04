import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Home } from '../pages/home'
import { Cart } from '../pages/cart'



const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/carts",
    element: <Cart/>,
  },
]);




export const Router = () => {
  return (
    <RouterProvider router={routers} />
  )
}