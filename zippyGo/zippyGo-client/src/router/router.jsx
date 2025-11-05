import mainLayout from "@/layout/MainLayout/mainLayout";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [{ index: true, Component: Home }],
  },
]);
