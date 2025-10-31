import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Header from "../Components/Header";
import useApps from "../hooks/useApps";

const Home = () => {
  // const handleClick = (appId, appTitle) => {

  //   console.log("ID:", appId);
  //   navigate(`/AppDetails/${appId}`);
  // };
  const { apps = [], loading, error } = useApps();

  const topProduct = apps.slice(0, 8);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Trending Apps</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid  gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5">
        {topProduct.map((product) => (
          <AppCard key={product.id} product={product}>
            {/* onClick={() => handleClick(app.id, app.title)} */}
          </AppCard>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <Link
          to="/AllApps"
          className="bg-gradient-to-r from-indigo-500 to-[#9F62F2]  py-2 px-15 rounded hover:-bg-linear-60 font-bold"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
