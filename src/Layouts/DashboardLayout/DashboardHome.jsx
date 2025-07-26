import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const DashboardHome = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user?.email) {
                try {
                    const res = await axios.get(`https://my-sql-server.vercel.app/user?email=${user.email}`);
                    console.log(res.data);

                    setUserInfo(res.data);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, [user]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>

            {userInfo ? (
                <div className="space-y-2">
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Role:</strong> {userInfo.role}</p>
                    {userInfo.images && (
                        <img
                            src={userInfo.images}
                            alt="User"
                            className="w-24 h-24 object-cover rounded-full mt-2 border"
                        />
                    )}
                </div>
            ) : (
                <p>Loading user info...</p>
            )}
        </div>
    );
};

export default DashboardHome;
