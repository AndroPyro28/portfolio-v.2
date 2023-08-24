import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../contants";
import { logo, menu, close } from "../assets";
import cn from "../utils/twMerge";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const cvUrl = 'https://res.cloudinary.com/iamprogrammer/image/upload/v1692908341/bpjbeturhwg3slwir5p5.pdf'
  return (
    <nav
      className={cn(
        `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 md:w-20 md:h-20 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Andro &nbsp;{" "}
            <span className="sm:block hidden"> | Web Developer</span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-7">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={cn(
                  `hover:text-white text-[18px] font-medium cursor-pointer`,
                  active === link.title ? "text-white" : "text-secondary"
                )}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}> {link.title} </a>
              </li>
            );
          })}
          |
          <li
            className={cn(
              ` font-poppins font-medium cursor-pointer text-[16px] text-secondary flex gap-2 `
            )}
          >
            <a href={cvUrl} download={true} target="_blank" className="flex">
              <HiDownload className="text-white w-8 h-6" />{" "}
              <span className="text-white uppercase">My Cv</span>
            </a>
          </li>
          <li
            className={cn(
              ` font-poppins font-medium cursor-pointer text-[16px] text-secondary flex gap-2 `
            )}
            onClick={() => {
              window.open('https://www.linkedin.com/in/menandro-eugenio-jr-05275a205/', '_blank')
            }}
          >
            <BsLinkedin className="text-white w-8 h-6" />{" "}
            <span className="text-white">Linkedin</span>
          </li>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />

          <div
            className={cn(
              `p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,
              `${!toggle ? "hidden" : "flex"}`
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={cn(
                      ` font-poppins font-medium cursor-pointer text-[16px]`,
                      active === link.title ? "text-white" : "text-secondary"
                    )}
                    onClick={() => {
                      setActive(link.title);
                      setToggle((prev) => !prev);
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title} </a>
                  </li>
                );
              })}
              <div className="h-[1px] w-full bg-white"></div>
              <li
            className={cn(
              ` font-poppins font-medium cursor-pointer text-[16px] text-secondary flex gap-2 `
            )}
          >
            <a href={cvUrl} download={true} target="_blank" className="flex">
              <HiDownload className="text-white w-8 h-6" />{" "}
              <span className="text-white uppercase">My Cv</span>
            </a>
          </li>
          <li
            className={cn(
              ` font-poppins font-medium cursor-pointer text-[16px] text-secondary flex gap-2 `
            )}
            onClick={() => {
              window.open('https://www.linkedin.com/in/menandro-eugenio-jr-05275a205/', '_blank')
            }}
          >
            <BsLinkedin className="text-white w-8 h-6" />{" "}
            <span className="text-white">Linkedin</span>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
