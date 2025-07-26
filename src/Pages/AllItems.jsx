import { useEffect, useState } from "react";
import axios from "axios";

const AllItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch items from backend
    useEffect(() => {
        axios.get("https://my-sql-server.vercel.app/users")
            .then(res => {
                setItems(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching users:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-lg font-medium mt-10">Loading users...</p>;
    }

    return (
        <section className="max-w-6xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">All Users</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map(user => (
                    <div key={user.id} className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
                        <img
                            src={user.images}
                            alt={user.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-sm text-blue-500">{user.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllItems;

