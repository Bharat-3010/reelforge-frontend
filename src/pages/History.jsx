import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";

export default function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const response = await API.get("/ai/history");

      setHistory(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteContent = async (id) => {

    try {

      await API.delete(`/ai/${id}`);

      fetchHistory();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-2">
            AI History
          </h1>

          <p className="text-gray-400">
            Your previously generated AI scripts and captions
          </p>

        </div>

        {
          history.length === 0 ? (

            <div className="bg-white/10 border border-white/10 rounded-3xl p-10 text-center">

              <h2 className="text-2xl font-semibold mb-3">
                No History Found
              </h2>

              <p className="text-gray-400">
                Generate some AI content first 🚀
              </p>

            </div>

          ) : (

            <div className="grid lg:grid-cols-2 gap-8">

              {history.map((item) => (

                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition"
                >

                  <div className="mb-5">

                    <h2 className="text-3xl font-bold text-blue-400 mb-2">
                      {item.topic}
                    </h2>

                    <div className="flex gap-3 flex-wrap">

                      <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {item.niche}
                      </span>

                      <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                        {item.platform}
                      </span>

                    </div>

                  </div>

                  <div className="bg-black/30 p-5 rounded-2xl text-gray-300 whitespace-pre-wrap text-sm leading-7 mb-6 max-h-80 overflow-y-auto">
                    {item.generatedText}
                  </div>

                  <button
                    onClick={() => deleteContent(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition"
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

          )
        }

      </div>

    </div>
  );
}