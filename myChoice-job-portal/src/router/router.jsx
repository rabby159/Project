import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
              path: "/",
              element: <Home></Home>
          }
      ]
    },
]);
  
export default router;