import "./Header.css";
import { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";

import NavbarSmall from "./NavbarSmall/NavbarSmall";
import NavbarLarge from "./NavbarLarge/NavbarLarge";
import Cart from "./Cart/Cart";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <header className="header">
      <div className="header_left">
        {screenWidth < 992 ? <NavbarSmall /> : <NavbarLarge />}
        <img src={logo} alt="sneakers-logo" style={{ marginLeft: "15px" }} />
      </div>

      <div className="header_right">
        <Cart />
        <img className="avatar_icon" src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
