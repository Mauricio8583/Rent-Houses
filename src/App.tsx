import { Navbar } from "./components/navbar/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Footer } from "./components/footer/Footer"
import { Houses } from "./pages/houses/Houses"
import { House } from "./pages/house/House"
import { Orders } from "./pages/orders/Orders"
import { MyHouse } from "./pages/myHouses/MyHouse"
import { Add } from "./pages/add/Add"
import { Messages } from "./pages/messages/Messages"
import { Message } from "./pages/message/Message"

function App() {  

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
       
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/houses",
          element: <Houses />
        },
        {
          path: "/house/:id",
          element: <House />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/myhouses",
          element: <MyHouse />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
      ]
    }
  ])

  return (    
    <div className="App">
      <RouterProvider router={router} />    
    </div>
    
  )
}

export default App
