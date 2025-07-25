import { useState } from "react";

const AddItem = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/items", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Item added successfully!");
                setFormData({ name: "", description: "", price: "" });
            } else {
                alert("Failed to add item.");
            }
        } catch (error) {
            console.error(error);
            alert("Error occurred!");
        }
    };

    return (
        <section className="max-w-xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Add New Item</h2>

            <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Item Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default AddItem;
