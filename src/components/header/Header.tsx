import { useState } from "react";
import { motion, type Variants } from "motion/react";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

/**
 * Header component that contains 
 */
const Header = () => {
  // Hold state of whether menu is toggled: true if toggled, false otherwise
  const [clicked, setClicked] = useState(false);

  // Function that sets clicked state to its inverse
  const handleClick = () => {
    setClicked(!clicked);
    console.log("clicked!");
  };

  // Animation variants that expand the menu on hamburger menu click
  const variants: Variants = {
    initial: {
      height: 48,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      },
    },
    animateExpand: {
      height: 256,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      },
    },
  };

  return (
    <header className="px-4 top-0 left-0 right-0">
      {/* Header bar container */}
      <div className="container mp-default w-full max-w-192 h-12 rounded-full flex items-center relative">
        {/* Hamburger menu for mobile devices */}
        <HamburgerMenu clicked={clicked} handleClick={handleClick} />

        {/* Dropdown menu container */}
        <motion.div
          className="bg-smoke/5 backdrop-blur-xs w-full h-full rounded-3xl absolute inset-0"
          initial="initial"
          animate={clicked ? "animateExpand" : undefined}
          variants={variants}
        ></motion.div>
      </div>
    </header>
  );
};

export default Header;
