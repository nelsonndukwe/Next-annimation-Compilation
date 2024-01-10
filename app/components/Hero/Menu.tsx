import React, { forwardRef, useRef } from "react";

const Menu = forwardRef(function Menu (props, ref:any){
    console.log(`ref`, ref);

  return (
    <span data-menu-item data-hidden ref={ref}>
      Menu
    </span>
  );
});

export default Menu;
