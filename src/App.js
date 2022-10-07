import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import Home from "./components/Home/Home";
import Main from "./components/layout/Main";
import Orders from "./components/Orders/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => fetch("tshirt.json"),
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/grandpa",
          element: <Grandpa></Grandpa>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
