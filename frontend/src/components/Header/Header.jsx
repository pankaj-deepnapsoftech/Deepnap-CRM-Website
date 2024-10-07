import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import Authentication from "../Authentication/Authentication";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAuthenticationMenu, setShowAuthenticationMenu] = useState(false);

  return (
    <div className="fixed w-full top-0 lg:top-[1rem] left-0 z-30">
      <div
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        }}
        className="flex justify-between items-center border border-[#24243e] w-full lg:w-[80%] mx-auto lg:rounded-full px-4 lg:px-16"
      >
        <Link to='/'><img
          className="w-[8rem] h-[5rem] object-cover invert"
          src={logo}
          alt="logo"
        ></img></Link>
        <ul className="hidden lg:flex flex-1 gap-8 ml-10">
          <li className="text-lg font-light hover:underline cursor-pointer text-white">Solutions</li>
          <Link to="/pricing"><li className="text-lg font-light hover:underline cursor-pointer text-white">Pricing</li></Link>
        </ul>
        <div className="hidden lg:block space-x-2">
          <Link to='/contact'><button className="px-4 py-2 border border-white rounded-full bg-white text-black ease-in-out duration-500 hover:bg-transparent hover:text-white">
            Book a Free Demo
          </button></Link>
          <Link to='/contact'><button className="px-4 py-2 border border-white rounded-full bg-white text-black ease-in-out duration-500 hover:bg-transparent hover:text-white">
            Contact Sales
          </button></Link>
        </div>
        
        <div className="visible flex-1 flex justify-end lg:hidden text-white text-4xl cursor-pointer">
          <div onClick={() => setShowMenu((prev) => !prev)}>
            {showMenu ? <ImMenu4 /> : <ImMenu3 />}
          </div>
        </div>

        <div className="ml-4 cursor-pointer" onClick={()=>setShowAuthenticationMenu(prev => !prev)}><MdOutlineAccountCircle color="white" size='40px' /></div>
      </div>

      {showMenu && (
        <div>
          <ul className="bg-white w-full flex flex-col gap-2 px-5 py-5">
            <li className="text-lg cursor-pointer hover:underline">Solutions</li>
            <Link to="/pricing"><li className="text-lg cursor-pointer hover:underline">Pricing</li></Link>
            <Link to='/contact'><li className="text-lg cursor-pointer hover:underline">Book a Free Demo</li></Link>
            <Link to='/contact'><li className="text-lg cursor-pointer hover:underline">Contact Sales</li></Link>
          </ul>
        </div>
      )}

      {showAuthenticationMenu && <Authentication hideModal={()=>setShowAuthenticationMenu(false)} />}
    </div>
  );
};

export default Header;
