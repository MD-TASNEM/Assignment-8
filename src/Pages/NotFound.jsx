import { NavLink} from "react-router";
import Nave from "../Components/Nave";
import Footer from "../Components/Footer";
import { useRouteError } from "react-router";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <Nave />
      <div className="text-center items-center justify-center flex flex-col h-screen gap-5">
        <img src="/public/error-404.png" alt="error-404.png" />
        <p className="text-3xl font-bold">Oops, page not found!</p>
        <p>{error?.statusText || error?.message || "Something went wrong"}</p>
        <NavLink
          to="/"
          className=" bg-gradient-to-r from-indigo-500 to-[#9F62F2]  p-2 rounded hover:-bg-linear-60 font-bold "
        >
          Go Back!
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
