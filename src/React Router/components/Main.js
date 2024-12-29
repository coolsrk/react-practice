import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./ContactUs";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import ParamComponent from "./ParamComponent";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Tests from "./Tests";
import Reports from "./Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <ContactUs />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "tests",
        element: <Tests />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <div>
        <Navbar />
        <ParamComponent />
      </div>
    ),
  },
  {
    path: '*',
    element: <h2>404 - Not Found</h2>
  }
]);

const Main = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Main;
