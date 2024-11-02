import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/pages/Home.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListMovie from "./pages/ListMovie";
import DetailMovie from "./pages/DetailMovie";
import SeatList from "./pages/SeatList";
import Payment from "./pages/Payment";
import PaymentConfirm from "./pages/PaymentConfirm";
import Thankyou from "./pages/Thankyou";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import Graph from "./pages/Graph";
import ManageMovie from "./pages/ManageMovie";

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
  {
    path: "/detail-movie",
    element: <DetailMovie />,
  },
  {
    path: "/seat-list",
    element: <SeatList />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/payment-confirm",
    element: <PaymentConfirm />,
  },
  {
    path: "/thankyou",
    element: <Thankyou />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/history",
    element: <OrderHistory />,
  },
  {
    path: "/graph",
    element: <Graph />,
  },
  {
    path: "/manage-movie",
    element: <ManageMovie />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
