import { NavLink } from "react-router";
import Nave from "../Components/Nave";
import Footer from "../Components/Footer";

export default function NotFound() {
  return <div
  >
    <Nave/>
    <div className="text-center items-center justify-center flex flex-col h-screen gap-5">
      <img src="/public/error-404.png" alt="" srcset="" />
    <p className="text-3xl font-bold">
      Oops, page not found!
    </p>
    <p>
      The page you are looking for is not available.
    </p>
    <NavLink
          to="/"
          className=" bg-gradient-to-r from-indigo-500 to-[#9F62F2]  p-2 rounded hover:-bg-linear-60 font-bold "
        >
          Go Back!
        </NavLink>
    </div>
      <Footer/>
    </div>;
}
