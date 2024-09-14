import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";
import Delete from "./pages/delete.jsx";
import Edit from "./pages/edit.jsx";
import Details from "./pages/details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/create-books",
    element: <CreateBooks />,
  },
  {
    path: "/books/edit/:id",
    element: <Edit />,
  },
  {
    path: "/books/details/:id",
    element: <Details />,
  },
  {
    path: "/books/delete/:id",
    element: <Delete />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
