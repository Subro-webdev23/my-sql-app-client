const Features = () => {
    const featureList = [
        {
            title: "Easy Data Insert",
            desc: "Add items to your MySQL database with just a few clicks using our simple UI.",
        },
        {
            title: "Live Data View",
            desc: "Fetch and view all records from your MySQL server in real-time.",
        },
        {
            title: "Secure & Fast",
            desc: "Built with performance and security in mind for a smooth experience.",
        },
    ];

    return (
        <section className="py-12 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose MySQLApp?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featureList.map((item, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-lg p-6 shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
