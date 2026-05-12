import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">
            AI Reel Generator
          </h1>

          <p className="text-gray-400">
            Generate viral social media content using AI
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition"
        >
          Logout
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold mb-4">
            Generate Content
          </h2>

          <p className="text-gray-400 mb-6">
            Create AI powered reels, captions, hooks and scripts instantly.
          </p>

          <button
            onClick={() => navigate("/generate")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl font-semibold w-full transition"
          >
            Generate AI Script
          </button>

        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold mb-4">
            View History
          </h2>

          <p className="text-gray-400 mb-6">
            Access all your previously generated AI content.
          </p>

          <button
            onClick={() => navigate("/history")}
            className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-xl font-semibold w-full transition"
          >
            View History
          </button>

        </div>

      </div>

    </div>
  );
}