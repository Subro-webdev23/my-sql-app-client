import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Navber = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/items'}>All Users</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>

    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">MySQLApp</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {user ? links : <Link to="/auth/login" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                        Login/Register
                    </Link>}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isOpen && (
                <ul className="md:hidden mt-4 space-y-2 px-4 font-medium">
                    {user ? links : <Link to="/auth/login" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                        Login/Register
                    </Link>}
                </ul>
            )}
        </nav>
    );
};

export default Navber;