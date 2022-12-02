import "./NavbarSmall.css";
import classnames from "classnames";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
//import HeaderButtons from "../HeaderButtons/HeaderButtons";
//import Dropdown from "../DropdownLinks/Dropdown";
//import Links from "../Links/Links";
import CloseBtn from "./CloseBtn/CloseBtn";

const NavbarSmall = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <>
      <HamburgerMenu setIsNavBarOpen={setIsNavBarOpen} />

      {isNavBarOpen && (
        <div className="overlay" onClick={() => setIsNavBarOpen(false)}></div>
      )}

      <div
        className={classnames("navbar_small", { navbar_open: isNavBarOpen })}
      >
        <CloseBtn setIsNavBarOpen={setIsNavBarOpen} />

        {/* <nav className="navbar_link">
          <Dropdown text="Features">Features</Dropdown>
          <Dropdown text="Company">Company</Dropdown>
          <Links />
        </nav> */}

        {/* <div className="buttons_container">
          <HeaderButtons />
        </div> */}
      </div>
    </>
  );
};

export default NavbarSmall;
