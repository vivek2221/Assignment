import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import "./Main.css"
import Login from "./Login";
import Register from "./Register";
import Info from "./Info";

const routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/login',
    element:<Login/>
  },
  {
    path:'/Register',
    element:<Register/>
  },{
    path:'/info',
    element:<Info/>
  }
])
const root=createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={routes}/>)