import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/login';
import Register from "../Pages/register";
import Dashboard from "../Pages/Dashboard";
   
  const router = createBrowserRouter([
    {
      path: '/',
      element: (<Login />),
    },
    {
      path: '/register',
      element: (<Register />)
    },
    {
      path: '/dashboard',
      element: (<Dashboard />)
    }
  ]);
  
  export default router;
  