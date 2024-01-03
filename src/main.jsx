import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseState from "./Hooks/UseState.jsx";
import UseRef from "./Hooks/UseRef.jsx";
import UseEffect from "./Hooks/UseEffect.jsx";
import UseLocalstoragePage from "./components/Custom_Pages/UseLocalstoragePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <UseState />,
      },
      {
        path: "useState",
        element: <UseState />,
      },
      {
        path: "useEffect",
        element: <UseEffect />,
      },
      {
        path: "useRef",
        element: <UseRef />,
      },
      {
        path: "UseLocalstorage",
        element: <UseLocalstoragePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
