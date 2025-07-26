import React from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const images = e.target.images.value;
        const role = e.target.role.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const userfb = await createUser(email, password);
            const user = await axios.post('https://my-sql-server.vercel.app/addUser', {
                name,
                images,
                email,
                password,
                role,
            });
            toast('Register Successful');
            console.log("User created:", user.data);
            navigate('/');

        } catch (error) {
            console.error("Error creating user:", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Images */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Images URL</label>
                    <input
                        type="text"
                        name="images"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Role */}
                <div>
                    <label htmlFor="role">Choose your role:</label>
                    <select name="role" id="role" required>
                        <option value="">-- Select a Role --</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Database Admin">Database Admin</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                    </select>
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Register
                </button>
                <div>
                    Already have an account? <Link to="/auth/login" className="text-blue-600 underline">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;