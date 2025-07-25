const DashboardHome = ({ userRole }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
            {userRole === "admin" ? (
                <p className="text-blue-600">You are logged in as <strong>Admin</strong></p>
            ) : (
                <p className="text-green-600">You are logged in as <strong>User</strong></p>
            )}
        </div>
    );
};

export default DashboardHome;
