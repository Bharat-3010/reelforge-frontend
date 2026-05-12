import { Link } from "react-router-dom";
import { FaRobot, FaHistory, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {

  return (

    <div className="w-64 min-h-screen bg-gray-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-10 text-blue-500">
        Zebvo AI
      </h1>

      <div className="flex flex-col gap-6">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaRobot />
          Dashboard
        </Link>

        <Link
          to="/history"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaHistory />
          History
        </Link>

        <button
          className="flex items-center gap-3 hover:text-red-400 mt-10"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}