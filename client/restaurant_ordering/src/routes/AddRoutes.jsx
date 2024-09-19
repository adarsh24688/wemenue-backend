import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Landing /> },
      // { path: "/about", element: <About /> },
    ],
  },
]);
const AddRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AddRoutes;
