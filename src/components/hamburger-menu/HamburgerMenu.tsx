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
      y: 10,
      rotate: 45,
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
      y: -10,
      rotate: -45,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      }
    }
  }

  return (
    // Hamburger menu container
    <div 
      aria-label="Toggle dropdown menu button" 
      className="w-8 h-8 ml-auto flex flex-col justify-center items-center gap-2 relative z-10"
      onClick={handleClick}
    >
      {/* Animated lines for the hamburger menu */}
      <motion.div 
        className="bg-smoke w-4 h-[2px] rounded-full" 
        initial="initial"
        animate={clicked ? "animateTopBar" : undefined}
        variants={variants}
      />
      <motion.div 
        className="bg-smoke w-6 h-[2px] rounded-full" 
        initial="initial"
        animate={clicked ? "animateMiddleBar" : undefined}
        variants={variants}
      />
      <motion.div 
        className="bg-smoke w-4 h-[2px] rounded-full" 
        initial="initial"
        animate={clicked ? "animateBottomBar" : undefined}
        variants={variants}
      />
    </div>
  );
}

export default HamburgerMenu;