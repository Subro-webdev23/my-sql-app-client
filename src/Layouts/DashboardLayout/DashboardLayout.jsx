import { Outlet, NavLink, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const DashboardLayout = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const user = await logOut();
            toast.success('Logout Successful');
            navigate('/');
        } catch (error) {
            toast.error("Error logout user:",);
        }
    }
    return (
        <div className="min-h-screen grid md:grid-cols-5">
            {/* Sidebar */}
            <aside className="bg-blue-600 text-white p-6 md:col-span-1">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <nav className="space-y-2">
                    <button onClick={handleLogout} className="block text-red-500">LogOut</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="md:col-span-4 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
