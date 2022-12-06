import "./NavbarSmall.css";
import classnames from "classnames";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Links from "../Links/Links";
import CloseBtn from "./CloseBtn/CloseBtn";

const NavbarSmall = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <>
      <div
        className={classnames("navbar_small", { navbar_open: isNavBarOpen })}
      >
        <CloseBtn setIsNavBarOpen={setIsNavBarOpen} />

        <nav className="navbar_link">
          <Links />
        </nav>
      </div>

      <HamburgerMenu setIsNavBarOpen={setIsNavBarOpen} />

      {isNavBarOpen && (
        <div className="overlay" onClick={() => setIsNavBarOpen(false)}></div>
      )}
    </>
  );
};

export default NavbarSmall;
