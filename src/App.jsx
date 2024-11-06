import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/pages/Home.jsx";
import Register from "/src/pages/Register";
import Login from "/src/pages/Login";
import ListMovie from "/src/pages/ListMovie";
import DetailMovie from "/src/pages/DetailMovie";
import SeatList from "/src/pages/SeatList";
import Payment from "/src/pages/Payment";
import PaymentConfirm from "/src/pages/PaymentConfirm";
import Thankyou from "/src/pages/Thankyou";
import Profile from "/src/pages/Profile";
import OrderHistory from "/src/pages/OrderHistory";
import Graph from "/src/pages/Graph";
import ManageMovie from "/src/pages/ManageMovie";
import AddMovie from "/src/pages/AddMovie";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
  {
    path: "/add-movie",
    element: <AddMovie />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
