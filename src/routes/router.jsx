import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import ErrorPage from "../components/Error/ErrorPage";
import MainLayout from "../layouts/MainLayout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
            path: '/signup',
            element:<Signup/>
        },
            {
                path: '/login',
                element:<Login/>
            }
        ]
    },
])

export default router;