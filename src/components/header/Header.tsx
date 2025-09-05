import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "motion/react";
import gitHubIcon from "../../assets/icons/github-icon.svg";
import linkedInIcon from "../../assets/icons/linkedin-icon.svg";

/**
 * Header component that contains animated name and links
 */
const Header = () => {
  // Hold state for current y scroll bar position
  const [scrolled, setScrolled] = useState(false);

  // Keep track of y scroll bar movement; 0 is the top of the browser height
  const { scrollY } = useScroll();

  /**
   * Check the latest position of the y scroll bar on every change.
   * If the position is greater than the hero height, set scrolled state to true.
   * Otherwise, set scrolled state to false.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 612) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Animation variants for links
  const linkVariants: Variants = {
    animateButtonHover: { x: "-50%" },
    animateHover: { scale: 1.15 },
  };

  return (
    <header className="px-4 fixed top-2 left-0 right-0 z-50">
      {/* Header bar container */}
      <div className="w-full h-12 mp-default p-4 rounded-full flex justify-between items-center relative">
        {/* Header bar background */}
        <div className="transparent-blur w-full h-full rounded-3xl absolute inset-0" />

        {/* Animated name header on scroll past hero */}
        <motion.h1
          className="text-2xl relative z-50"
          initial={{ opacity: 0, x: -10 }}
          animate={scrolled ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Andrew Aquino
        </motion.h1>

        {/* Header links */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Github link */}
          <motion.a
            href="https://github.com/AndrewGlennAquino"
            target="_blank"
            initial="initial"
            whileHover="animateHover"
            transition={{ type: "spring", bounce: 0.25, visualDuration: 0.25 }}
            variants={linkVariants}
          >
            <img src={gitHubIcon} alt="GitHub icon" className="w-6 h-auto" />
          </motion.a>

          {/* LinkedIn link */}
          <motion.a
            href="https://www.linkedin.com/in/andrew-glenn-aquino/"
            target="_blank"
            initial="initial"
            whileHover="animateHover"
            transition={{ type: "spring", bounce: 0.25, visualDuration: 0.25 }}
            variants={linkVariants}
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn icon"
              className="w-6 h-auto"
            />
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
