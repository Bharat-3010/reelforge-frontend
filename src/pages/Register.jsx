import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      await API.post(
        "/api/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white mb-2">
            Create Account
          </h1>

          <p className="text-gray-400">
            Start building with AI 🚀
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-5">

            <label className="text-gray-300 text-sm block mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 outline-none focus:border-green-500"
            />

          </div>

          <div className="mb-5">

            <label className="text-gray-300 text-sm block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 outline-none focus:border-green-500"
            />

          </div>

          <div className="mb-6">

            <label className="text-gray-300 text-sm block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 outline-none focus:border-green-500"
            />

          </div>

          <button
            className="w-full bg-green-600 hover:bg-green-700 transition duration-300 text-white font-semibold p-4 rounded-xl"
          >
            Create Account
          </button>

          <p className="text-gray-400 mt-6 text-center">

            Already have an account?

            <Link
              to="/"
              className="text-blue-400 hover:text-blue-300 ml-2"
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}