import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import Login from "../components/Pages/Login";
import Registration from "../components/Pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "addToy",
        element: <AddToy />,
      },
      {
        path: "allToys",
        element: <AllToys />,
        loader: ()=>fetch('http://localhost:2000/allToys')
      },
    ],
  },
]);

export default router;
