import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast, Toaster } from "react-hot-toast";
import { Star, Download, MessageCircle } from "lucide-react";

const AppDetails = () => {
  const { id } = useParams();
  const { apps = [] } = useApps();
  const [installed, setInstalled] = useState(false);

  const app = apps.find((a) => a.id === parseInt(id));

  useEffect(() => {
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    setInstalled(installedApps.some((a) => a.id === parseInt(id)));
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    if (!installedApps.some((a) => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`, {
        icon: "Installed",
        duration: 3000,
      });
    }
  };

  if (!app) return <div className="text-center py-20">App not found</div>;

  const ratingData = app.ratings.map((r) => ({ name: r.name, count: r.count }));
  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <>
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto p-6">
        {/* App Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <img
                src={app.image}
                alt={app.title}
                className="w-48 h-48 rounded-2xl shadow-md object-cover"
              />
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{app.title}</h1>
                <p className="text-lg text-gray-600">{app.companyName}</p>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{app.ratingAvg}</span>
                  <span className="text-gray-500">({app.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span>{app.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>{app.size} MB</span>
                </div>
              </div>
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  installed
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                }`}
              >
                {installed ? "Installed" : "Install"}
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">User Ratings</h2>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Based on {totalRatings.toLocaleString()} ratings
          </p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About This App</h2>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
