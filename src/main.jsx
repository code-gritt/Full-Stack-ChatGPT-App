import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage/Homepage.jsx";
import DashboardPage from "./routes/Dashboard/Dashboard.jsx";
import ChatPage from "./routes/Chatpage/Chatpage.jsx";
import SignInPage from "./routes/SignInpage/SignInpage.jsx";
import SignUpPage from "./routes/SignUppage/SignUppage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
