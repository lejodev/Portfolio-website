import React from "react";
import "./_BurgerMenu.scss";

const BurgerMenu = ({ onDisplayMenu }) => {
  return (
    <div className="burgerMenu" onTouchEnd={() => onDisplayMenu()}>
      <div className="stick stick1"></div>
      <div className="stick stick2"></div>
      <div className="stick stick3"></div>
    </div>
  );
};

export default BurgerMenu;
