import Footer from "./../../Components/Footer";
import { Outlet } from "react-router";
import Nave from "./../../Components/Nave";

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nave />
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayouts;
