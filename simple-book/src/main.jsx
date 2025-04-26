import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/listedBooks/listedBooks.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import BookDetail from "./components/BookDetail/BookDetail.jsx";
import Map from "./components/Map/map.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/bookData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/map",
        element: <Map></Map>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
