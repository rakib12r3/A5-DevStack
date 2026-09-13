import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">


      <div className="lg:hidden relative flex items-center justify-between h-14 px-4">

        <button className="text-gray-600 text-2xl cursor-pointer">
          <FiMenu />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src={Logo}
            alt=""
            className='w-[95px]'
          />
        </div>

        <div className="flex items-center gap-1">

          <button className="text-xs font-semibold text-gray-600 px-2 py-1">
            Sign In
          </button>

          <button className="bg-[#D91B7E] text-white text-xs font-semibold px-3 py-1.5 rounded-2xl">
            Sign Up
          </button>

        </div>

      </div>



      <div className="hidden lg:flex justify-between gap-6 container mx-auto items-center py-2">

        <div>
          <img
            className="cursor-pointer"
            src={Logo}
            alt=""
          />
        </div>


        <div>
          <ul className="flex justify-between gap-4 font-semibold">

            <li>
              <span className="text-[#DB2777] cursor-pointer">
                <a href="">Home</a>
              </span>
            </li>

            <li className="text-[#475569]">
              <a href="">Technologies</a>
            </li>

            <li className="text-[#475569]">
              <a href="">Projects</a>
            </li>

            <li className="text-[#475569]">
              <a href="">About</a>
            </li>

            <li className="text-[#475569]">
              <a href="">Contact</a>
            </li>

          </ul>
        </div>


        <div>
          <button className="btn btn-ghost rounded-2xl">
            Sign In
          </button>

          <button className="btn px-6 bg-[#D91B7E] rounded-2xl outline-none text-white">
            Sign Up
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Nav;