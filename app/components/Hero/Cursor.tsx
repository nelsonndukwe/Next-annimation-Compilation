import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = ({ stickyElement }: any) => {
  console.log(`stickyElement`, stickyElement.current);
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 35;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothScroll = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2),
      mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const mousePostion = window.addEventListener("mousemove", manageMouseMove);
    //  const mouseOverprop = stickyElement?.current.addEventListener("mouseover", manageMouseOver)
    //     stickyElement?.current.addEventListener("mouseleave", manageMouseLeave)

    return () => {
      mousePostion;
      // mouseOverprop.removeEventListener("mouseleave", manageMouseLeave)
      // stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
    };
  });

  return (
    <motion.div
      style={{ left: smoothScroll.x, top: smoothScroll.y }}
      className={styles.cursor}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;
