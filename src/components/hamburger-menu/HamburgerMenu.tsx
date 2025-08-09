import { motion, type Variants } from "motion/react";

// Assign types to props for hamburger menu component
interface HamburgerMenuProps {
  clicked: boolean,
  handleClick: () => void
}

/**
 * Hamburger menu component for mobile devices that contains header links.
 * Takes clicked state and handleClick function as props from header
 * @param props clicked, handleClick
 */
const HamburgerMenu = ({ clicked, handleClick }: HamburgerMenuProps) => {
  // Animation variants for the bars when hamburger menu is toggled
  const variants: Variants = {
    initial: {
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      }
    },
    animateTopBar: {
      y: 5,
      rotate: 225,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      }
    },
    animateMiddleBar: {
      width: 0,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      }
    }, animateBottomBar: {
      y: -5,
      rotate: -225,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      }
    }
  }

  return (
    // Hamburger menu container
    <button 
      aria-label="Toggle dropdown menu button" 
      className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-2 relative z-50"
      onClick={handleClick}
    >
      {/* Animated lines for the hamburger menu */}
      <motion.div 
        className="hamburger-menu" 
        initial="initial"
        animate={clicked ? "animateTopBar" : undefined}
        variants={variants}
      />
      <motion.div 
        className="hamburger-menu" 
        initial="initial"
        animate={clicked ? "animateBottomBar" : undefined}
        variants={variants}
      />
    </button>
  );
}

export default HamburgerMenu;