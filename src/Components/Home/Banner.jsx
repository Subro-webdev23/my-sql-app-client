const Banner = () => {
    return (
        <section className="bg-blue-100 text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                {/* Text Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Manage Your Data Easily with <span className="text-blue-600">MySQLApp</span>
                    </h1>
                    <p className="text-lg mb-6">
                        A simple and powerful app to connect, insert, and view your MySQL data with ease.
                    </p>
                    <a href="/add" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                        Get Started
                    </a>
                </div>

                {/* Banner Image or Illustration */}
                <div className="flex justify-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2772/2772165.png"
                        alt="MySQL Illustration"
                        className="w-64 md:w-96"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;