import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add'}>Add Item</NavLink></li>
        <li><NavLink to={'/items'}>All Item</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">MySQLApp</h2>
                    <p className="text-sm">A simple MySQL-powered app with clean UI and easy management.</p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        {links}
                    </ul>
                </div>

                {/* Contact / Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p className="text-sm">Email: support@mysqlapp.com</p>
                    <p className="text-sm">Phone: +880 1234 567890</p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center mt-8 border-t border-blue-400 pt-4 text-sm">
                © {new Date().getFullYear()} MySQLApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;