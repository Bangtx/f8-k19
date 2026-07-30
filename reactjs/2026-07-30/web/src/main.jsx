import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/index.jsx";
import Products from "./pages/Products/index.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
