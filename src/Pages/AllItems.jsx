import { useEffect, useState } from "react";

const AllItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch items from backend
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch("http://localhost:3000/items");
                const data = await res.json();
                setItems(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching items:", err);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">All Items</h2>

            {loading ? (
                <p className="text-center text-gray-600">Loading items...</p>
            ) : items.length === 0 ? (
                <p className="text-center text-red-500">No items found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white rounded shadow p-6 hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-700 mb-3">{item.description}</p>
                            <p className="text-blue-600 font-bold">${item.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default AllItems;
