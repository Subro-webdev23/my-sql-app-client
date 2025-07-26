import { Link } from "react-router";

const CallToAction = () => {
    return (
        <section className="bg-blue-600 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6 text-lg">Connect to your MySQL database and manage records like a pro!</p>
                <Link to="/add" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                    Add Your First Item
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
