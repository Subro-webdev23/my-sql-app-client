import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home";
import NotFound from "../Shared/NotFound/NotFound";
import AddItem from "../Pages/AddItem";
import AllItems from "../Pages/AllItems";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../Layouts/DashboardLayout/DashboardHome";

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