import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Jobs from "../pages/Jobs";
import Message from "../pages/Message";
import Network from "../pages/Network";
import Notification from "../pages/Notification";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "network",
        element: <Network />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "messaging",
        element: <Message />,
      },
      
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
