import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import Login from "../components/Pages/Login";
import MyToys from "../components/Pages/MyToys";
import Page404 from "../components/Pages/Page404";
import Registration from "../components/Pages/Registration";
import SingleToy from "../components/Pages/SingleToy";

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
        element: <AddToy />,
      },
      {
        path: "allToys",
        element: <AllToys />,
        loader: ()=>fetch('http://localhost:2000/allToys')
      },
      {
        path: 'myToys',
        element: <MyToys />
      },
      {
        path: 'singleToy/:id',
        element: <SingleToy />,
        loader: ({params})=> fetch(`http://localhost:2000/singleToy/${params.id}`)
      }
    ],
  },
]);

export default router;
