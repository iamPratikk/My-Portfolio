import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Articles from "./Articles";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
{
  /* <RouterProvider /> */
}
