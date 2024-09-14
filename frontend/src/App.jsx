import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create-books",
      element: <CreateBooks />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/",
      element: <Delete />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
