import React, { forwardRef, useRef } from "react";
import styles from "./Hero.module.scss";

interface MenuProps{
  onClick: () => void
}

const Menu = ({onClick}:MenuProps)=>{

  return (
    <span data-menu-item data-hidden onClick={onClick} className={styles.menu}>
      Menu
    </span>
  );
};

export default Menu;
