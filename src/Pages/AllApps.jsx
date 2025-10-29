import { useState, useMemo } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";

const AllApps = () => {
  const { apps = [], loading, error } = useApps(); // apps default empty array
  const [searchTerm, setSearchTerm] = useState("");

  // Filter apps based on title or companyName
  const filteredApps = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return apps;

    return apps.filter((app) => {
      const title = (app.title || "").toLowerCase();
      const company = (app.companyName || "").toLowerCase();

      return title.includes(term) || company.includes(term);
    });
  }, [apps, searchTerm]);

  // Loading State
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        <p className="mt-3 text-lg text-indigo-600">Loading apps...</p>
      </div>
    );

  // Error State
  if (error)
    return (
      <div className="text-center mt-20 p-6 bg-red-100 border-l-4 border-red-500 text-red-700">
        <p className="font-bold text-xl"> Oops! Something went wrong.</p>
        <p className="mt-2 text-lg">Error: {error.message}</p>
      </div>
    );


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 md:mb-0">
              <span className="text-indigo-600">Discover</span> All Apps
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Showing{" "}
              <span className="font-bold text-indigo-600">{filteredApps.length}</span>{" "}
              apps {searchTerm && `for "${searchTerm}"`}
            </p>
          </div>


          <div className="relative w-full md:w-80 mt-6 md:mt-0">
            <input
              type="search"
              placeholder="Search apps by title or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 text-gray-700 placeholder-gray-500
                         focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-600 shadow-lg transition duration-150"
            />
            <svg
              className="absolute top-1/2 left-4 transform -translate-y-1/2 h-5 w-5 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>


        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => (
              <AppCard
                key={app.id}
                product={app}
                className="transition transform duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl rounded-xl"
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-xl shadow-xl border-t-4 border-indigo-500">
              <p className="text-3xl font-bold text-gray-800 mb-2"> No apps found</p>
              <p className="text-xl text-gray-500">
                Try adjusting your search or check your spelling.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
