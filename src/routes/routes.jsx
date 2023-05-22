import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import Blog from "../components/Pages/Blog";
import Login from "../components/Pages/Login";
import MyToys from "../components/Pages/MyToys";
import Page404 from "../components/Pages/Page404";
import Registration from "../components/Pages/Registration";
import SingleToy from "../components/Pages/SingleToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Page404 />,
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
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "allToys",
        element: <AllToys />,
        // loader: ()=>fetch('https://server-gray-mu.vercel.app/totalToys')
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "singleToy/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-gray-mu.vercel.app/singleToy/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
