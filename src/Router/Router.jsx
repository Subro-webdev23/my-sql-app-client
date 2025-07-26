import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home";
import NotFound from "../Shared/NotFound/NotFound";
import AddItem from "../Pages/AddItem";
import AllItems from "../Pages/AllItems";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../Layouts/DashboardLayout/DashboardHome";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/Login";
import Register from "../Layouts/AuthLayout/Register";

const role = "admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/add',
                element: <AddItem />
            },
            {
                path: '/items',
                element: <AllItems />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />

            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome userRole={role} />
            }
        ]
    }
]);