import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage/Homepage.jsx";
import DashboardPage from "./routes/Dashboard/Dashboard.jsx";
import ChatPage from "./routes/Chatpage/Chatpage.jsx";
import RootLayout from "./layouts/RootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.jsx";
import SignInpage from "./routes/SignInpage/SignInpage.jsx";
import SignUppage from "./routes/SignUppage/SignUppage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInpage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUppage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
