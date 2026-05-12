import { useState } from "react";
import API from "../services/api";

export default function Generate() {

  const [formData, setFormData] = useState({
    topic: "",
    niche: "",
    platform: "",
    tone: "",
  });

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateContent = async () => {

    setLoading(true);

    try {

      const response = await API.post(
        "/ai/generate",
        formData
      );

      setResult(response.data);

    } catch (error) {

      alert("AI Generation Failed");
    }

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold mb-4">
            AI Reel Generator
          </h1>

          <p className="text-gray-400 text-lg">
            Generate viral hooks, captions & reel scripts using AI 🚀
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT FORM SECTION */}

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              Content Details
            </h2>

            <div className="space-y-6">

              <div>

                <label className="block text-gray-300 mb-2">
                  Topic
                </label>

                <input
                  name="topic"
                  placeholder="e.g Gym Motivation"
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
                />

              </div>

              <div>

                <label className="block text-gray-300 mb-2">
                  Niche
                </label>

                <input
                  name="niche"
                  placeholder="e.g Fitness"
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
                />

              </div>

              <div>

                <label className="block text-gray-300 mb-2">
                  Platform
                </label>

                <select
                  name="platform"
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
                >
                  <option value="">Select Platform</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="TikTok">TikTok</option>
                </select>

              </div>

              <div>

                <label className="block text-gray-300 mb-2">
                  Tone
                </label>

                <select
                  name="tone"
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
                >
                  <option value="">Select Tone</option>
                  <option value="Motivational">Motivational</option>
                  <option value="Funny">Funny</option>
                  <option value="Professional">Professional</option>
                  <option value="Emotional">Emotional</option>
                  <option value="Educational">Educational</option>
                </select>

              </div>

              <button
                onClick={generateContent}
                className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 p-4 rounded-xl font-semibold text-lg"
              >
                {loading ? "Generating AI Content..." : "Generate Content"}
              </button>

            </div>

          </div>

          {/* RIGHT RESULT SECTION */}

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold">
                AI Result
              </h2>

              {result && (

                <button
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-sm font-semibold transition"
                >
                  Copy
                </button>

              )}

            </div>

            {

              loading ? (

                <div className="flex flex-col items-center justify-center h-[500px]">

                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>

                  <p className="text-gray-400 text-lg">
                    AI is generating content...
                  </p>

                </div>

              ) : result ? (

                <div className="bg-black/30 border border-white/10 rounded-2xl p-6 whitespace-pre-wrap text-gray-300 leading-8 overflow-y-auto h-[500px]">
                  {result}
                </div>

              ) : (

                <div className="flex flex-col items-center justify-center h-[500px] text-center">

                  <div className="text-7xl mb-6">
                    🤖
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">
                    Your AI content will appear here
                  </h3>

                  <p className="text-gray-400 max-w-md">
                    Fill the form and generate engaging scripts, captions, hooks and hashtags instantly.
                  </p>

                </div>

              )

            }

          </div>

        </div>

      </div>

    </div>
  );
}