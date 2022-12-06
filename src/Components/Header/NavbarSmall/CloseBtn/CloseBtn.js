import iconClose from "../../../../images/icon-close.svg";

const CloseBtn = (props) => {
  return (
    <button
      onClick={() => props.setIsNavBarOpen(false)}
      style={{ alignSelf: "flex-start" }}
    >
      <img src={iconClose} alt="icon-close" />
    </button>
  );
};

export default CloseBtn;
