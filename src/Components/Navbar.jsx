import Logo from "../Assets/svgexport-1.svg";
import Home from "../Assets/svgexport-2.svg";
import Kelas from "../Assets/svgexport-3.svg";
import Tutor from "../Assets/svgexport-4.svg";
import Buku from "../Assets/svgexport-5.svg";
import Discord from "../Assets/svgexport-6.svg";
import Search from "../Assets/svgexport-7.svg";
import Theme from "../Assets/svgexport-7.svg";

function Navbar() {
  return (
    <nav className="bg-teal-900 h-14 px-4 md:px-10 flex items-center justify-between text-white w-full">
      <div className="flex items-center gap-6">
        <a href="">
          <img src={Logo} alt="Logo" className="h-8 ml-24" />
        </a>
        <ul className="flex items-center ml-[-11px] gap-1 text-sm font-semibold">
          <li>
            <a
              href=""
              className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/15 transition duration-200"
            >
              <img src={Home} alt="Home" className="h-5" />
              <span className="text-[16px] font-medium text-white">Home</span>
            </a>
          </li>
          <li>
            <a href=""
              className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/15 transition duration-200">
              <img src={Kelas} alt="Kelas" className="h-6" />
              <span className="text-[16px]">Kelas</span>
            </a>
          </li>
          <li>
            <a href=""
              className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/15 transition duration-200">
              <img src={Tutor} alt="Tutorial" className="h-5" />
              <span className="text-[16px]">Tutorial</span>
            </a>
          </li>
          <li>
            <a href=""
              className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/15 transition duration-200">
              <img src={Buku} alt="Buku" className="h-5" />
              <span className="text-[16px]">Buku</span>
            </a>
          </li>
          <li>
            <a href=""
              className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/15 transition duration-200">
              <img src={Discord} alt="Discord" className="h-4" />
              <span className="text-[16px]">Discord</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button>
          <img
            src={Search}
            alt="Search"
            className="h-5  opacity-80 hover:opacity-100 transition"
          />
        </button>
        <button>
          <img
            src={Theme}
            alt="Theme Toggle"
            className="h-5 opacity-80 hover:opacity-100 transition"
          />
        </button>
        <a
          href="#"
          className="bg-teal-500 text-white px-[12px] py-2 mr-28 rounded-[8px] text-m hover:bg-teal-300 transition"
        >
          Join Newsletter
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
