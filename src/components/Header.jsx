import { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header max-width py-5">
        <div className=" flex items-center justify-between">
          <article className="flex items-center">
            <img src={logo} alt="" />

            <nav className="hidden md:block ml-5 text-slate-400">
              <ul className="flex items-center justify-start">
                <li className=" hover:text-darkViolet">
                  <button>Features</button>
                </li>
                <li className=" my-5 md:my-0 md:mx-5 hover:text-darkViolet">
                  <button>Pricing</button>
                </li>
                <li className=" hover:text-darkViolet">
                  <button>Resources</button>
                </li>
              </ul>
            </nav>

            <ul className=" hidden md:flex items-center ml-[35rem]">
              <li className="my-5 md:my-0 md:mr-5">
                <button className="text-slate-400 hover:text-darkViolet">Login</button>
              </li>
              <li>
                <button className="btn-cta rounded-full">Sign up</button>
              </li>
            </ul>
          </article>

          {isOpen && (
            <div
              className="absolute left-5 right-5 top-20 rounded bg-darkViolet text-slate-200 
            text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent
            md:text-gray-400 md:text-left md:py-0 md:flex md:items-center md:hidden"
            >
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <button>Features</button>
                  </li>
                  <li className="my-5">
                    <button>Pricing</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                </ul>
              </nav>
              <ul className=" flex flex-col items-center justify-center">
                <li className="my-5">
                  <button>Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign up</button>
                </li>
              </ul>
            </div>
          )}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? close : menu} alt="" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
