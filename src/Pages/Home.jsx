import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Header from "../Components/Header";
import useApps from "../hooks/useApps";
import { useNavigate } from "react-router";

const Home = () => {
  const { apps = [], loading, error } = useApps();
  const navigate = useNavigate();

  const handleClick = (appId) => {
    navigate(`/AppDetails/${appId}`);
  };

  const topProduct = apps.slice(0, 8);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Trending Apps</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {topProduct.map((app) => (
          <div
            key={app.id}
            className="transition transform duration-300 hover:scale-[1.02]
                           shadow-md hover:shadow-xl rounded-xl cursor-pointer"
            onClick={() => handleClick(app.id)}
          >
            <AppCard product={app} />
          </div>
        ))}
      </div>

      <br />
      <div className="flex justify-center mb-4">
        <Link
          to="/AllApps"
          className="bg-gradient-to-r from-indigo-500 to-[#9F62F2] py-2 px-15 rounded hover:-bg-linear-60 font-bold"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
