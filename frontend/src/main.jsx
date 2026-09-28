import './global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from './pages/dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
