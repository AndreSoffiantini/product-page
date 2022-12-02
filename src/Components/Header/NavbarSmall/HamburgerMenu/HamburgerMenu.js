import iconMenu from "../../../../images/icon-menu.svg";

const HamburgerMenu = (props) => {
  return (
    <button onClick={() => props.setIsNavBarOpen(true)}>
      <img src={iconMenu} alt="open"></img>
    </button>
  );
};

export default HamburgerMenu;
