import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ChefDetail from "../Pages/Home/MasterChef/ChefDetail";
import Booking from "../Pages/Home/BookTable/Booking";
import Menu from "../Pages/Menu/Menu";
import SharedReceipe from "../Pages/SharedReceipe/SharedReceipe";
import PrivateRoute from "./PrivateRoute";
import ManageTable from "../Pages/Home/BookTable/ManageTable";
import UpdateTable from "../Pages/Home/BookTable/UpdateTable";
import ManageShareReceipe from "../Pages/SharedReceipe/ManageShareReceipe";
import UpdateShare from "../Pages/SharedReceipe/UpdateShare";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },
        {
            path: "/booked",
            element: <PrivateRoute><Booking></Booking></PrivateRoute>
        },
        {
            path: "/manageTable",
            element: <PrivateRoute> <ManageTable></ManageTable> </PrivateRoute>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: "/shared",
            element: <PrivateRoute><SharedReceipe></SharedReceipe></PrivateRoute>
        },
        {
            path: "/manageSharedReceipe",
            element: <PrivateRoute> <ManageShareReceipe></ManageShareReceipe> </PrivateRoute>
        },
        {
          path: "/chef/:_id",
          element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/chef/${params._id}`)
        },

        {
          path: 'manageTable/update/:_id',
          element: <PrivateRoute><UpdateTable></UpdateTable></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/booking/${params._id}`)
        },

        {
          path: 'manageSharedReceipe/updateShare/:_id',
          element: <PrivateRoute> <UpdateShare></UpdateShare> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/sharedReceipe/${params._id}`)
        },
      ]
    },
  ]);