import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post("/auth/login", formData);

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white mb-2">
            ReelForge AI
          </h1>

          <p className="text-gray-400">
            Welcome back 👋
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-5">

            <label className="text-gray-300 text-sm block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

          </div>

          <div className="mb-6">

            <label className="text-gray-300 text-sm block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold p-4 rounded-xl"
          >
            Login
          </button>

          <p className="text-gray-400 mt-6 text-center">

            Don’t have an account?

            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 ml-2"
            >
              Register
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}