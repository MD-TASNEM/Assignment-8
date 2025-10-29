import { FaDownload } from "react-icons/fa";
import { SiReverbnation } from "react-icons/si";


const Header = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between px-6 md:px-12 py-24 gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center ">
              We Build{" "}
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  Productive
                </span>{" "}
                Apps
              </div>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-center ">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
          <div className="flex flex-row items-center gap-6 mt-8">
            <div className="hover:scale-105 transition duration-500">
              <button className="btn btn-active ">
                <img src="/playstore.png" alt="playstore.jpg" className="h-7" />
                <a href="https://play.google.com/">Google Play</a>
              </button>
            </div>
            <div className="hover:scale-105 transition duration-500">
              <p className="btn btn-active">
                <img src="/app-store.jpg" alt="app-store.jpg" className="h-7" />
                <a href="https://www.apple.com/app-store/">App Store</a>
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/hero.png"
              alt="Hero Illustration"
              className="w-full max-w-md hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-40 -z-10"></div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-indigo-500 to-[#9F62F2] text-white font-bold">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-lg mb-3 text-gray-200">Total Downloads</h3>
              <p className="text-6xl font-extrabold mb-3 group-hover:text-white transition-colors">
                29.6M
              </p>
              <p className="text-sm text-gray-300">21% More Than Last Month</p>
              <FaDownload></FaDownload>
            </div>

            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-lg mb-3 text-gray-200">Total Reviews</h3>
              <p className="text-6xl font-extrabold mb-3 group-hover:text-white transition-colors">
                906K
              </p>
              <p className="text-sm text-gray-300">46% More Than Last Month</p>
              <SiReverbnation></SiReverbnation>
            </div>

            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-lg mb-3 text-gray-200">Active Apps</h3>
              <p className="text-6xl font-extrabold mb-3 group-hover:text-white transition-colors">
                132+
              </p>
              <p className="text-sm text-gray-300">31 More Will Launch</p>

            </div>
          </div>

      
        </div>
      </section>
    </>
  );
};

export default Header;
