//import iconClose from "../../../../images/icon-close-menu.svg";

const CloseBtn = (props) => {
  return (
    <button
      onClick={() => props.setIsNavBarOpen(false)}
      style={{ alignSelf: "flex-end" }}
    >
      {/* <img src={iconClose} alt="icon-close" /> */}
    </button>
  );
};

export default CloseBtn;
