// MyInstallation.jsx
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import LoadingSpinner from './../Components/LoadingSpinner';

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setInstalledApps(sortApps(apps, sortOrder));
      setLoading(false);
    }, 800); // Simulate loading
  }, [sortOrder]);

  const sortApps = (apps, order) => {
    return [...apps].sort((a, b) => {
      return order === "high-low"
        ? b.downloads - a.downloads
        : a.downloads - b.downloads;
    });
  };

  const handleUninstall = (appId, appTitle) => {
    const updated = installedApps.filter((app) => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    toast.error(`${appTitle} uninstalled.`, { icon: "Uninstalled" });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (installedApps.length === 0) {
    return (
      <>
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto p-6 text-center py-20">
          <p className="text-xl text-gray-500">No apps installed yet.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Installed Apps</h1>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="high-low">Downloads: High-Low</option>
            <option value="low-high">Downloads: Low-High</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <div key={app.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={app.image} alt={app.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg truncate">{app.title}</h3>
                <p className="text-sm text-gray-600">{app.companyName}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">{app.downloads.toLocaleString()} downloads</span>
                  <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyInstallation;