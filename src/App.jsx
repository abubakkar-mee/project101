import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Users from "./components/Users"
import User from './components/User'
import Products from "./components/Products"
import ProductCatalog from "./components/ProductCatalog"
import Section from "./components/Section"
import BasicPage from "./components/BasicPage"
import Dropdown from "./components/Dropdown"
import Tab from "./components/Tab"
import Modal from './components/Modal'
import Store from "./components/Store"
import Cart from "./components/Cart"
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<BasicPage/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/store",
      element:<Store/>
    },
    {
      path:"/modal",
      element:<Modal/>
    },
    {
      path:"/tab",
      element:<Tab/>
    },
    {
      path:"dropdown",
      element:<Dropdown/>
    },
    {
      path:"/users",
      element:<Users/>
    },
    {
      path:"/user/:id",
      element:<User/>
    }
  ]
)

const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App