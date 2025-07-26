import { Outlet, Link } from "react-router";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

                {/* Logo / Title */}
                <div className="text-center mb-6">
                    <Link to="/" className="text-3xl font-bold text-blue-600">MySQLApp</Link>
                    <p className="text-sm text-gray-500">Welcome! Please login or register to continue.</p>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
