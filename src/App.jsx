import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/pages/Home.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListMovie from "./pages/ListMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/list-movie",
    element: <ListMovie />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
