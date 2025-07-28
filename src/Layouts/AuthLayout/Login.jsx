import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const response = await axios.post('https://my-sql-server.vercel.app/login', { email, password });
            console.log(response.data.user);

            setUser(response.data.user)
            navigate('/')
        } catch (error) {
            if (error.response) {
                console.log(error.response.status); // 401
                console.log(error.response.data);   // error message
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input

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

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Login
            </button>
            <div>
                Don't have an account? <Link to="/auth/register" className="text-blue-600 underline">Register</Link>
            </div>
        </form>
    );
};

export default Login;
