import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen grid md:grid-cols-5">
            {/* Sidebar */}
            <aside className="bg-blue-600 text-white p-6 md:col-span-1">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <nav className="space-y-2">
                    <NavLink to="/dashboard" className="block hover:text-blue-100">Overview</NavLink>
                    <NavLink to="/dashboard/user" className="block hover:text-blue-100">User Panel</NavLink>
                    <NavLink to="/dashboard/admin" className="block hover:text-blue-100">Admin Panel</NavLink>
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
