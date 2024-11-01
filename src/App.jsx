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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
