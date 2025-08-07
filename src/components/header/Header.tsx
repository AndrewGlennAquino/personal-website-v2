import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "motion/react";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import resumeIcon from "../../assets/icons/file-text-icon.svg";
import gitHubIcon from "../../assets/icons/github-icon.svg";
import linkedInIcon from "../../assets/icons/linkedin-icon.svg";

/**
 * Header component that contains hamburger menu for mobile devices
 * and links for tablets and larger
 */
const Header = () => {
  // Hold state of whether menu is toggled: true if toggled, false otherwise
  const [clicked, setClicked] = useState(false);

  // Hold state for current y scroll bar position
  const [scrolled, setScrolled] = useState(false);

  // Keep track of y scroll bar movement; 0 is the top of the browser height
  const { scrollY } = useScroll();

  // Function that sets clicked state to its inverse
  const handleClick = () => {
    setClicked(!clicked);
  };

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

  // Animation variants that expand the dropdown menu on hamburger menu click
  const dropdownVariants: Variants = {
    initial: { height: 48 },
    animateExpand: { height: 256 },
  };

  // Animation variants that animate the dropdown menu links
  const mobileLinkVariants: Variants = {
    initial: { y: -25, opacity: 0 },
    animateLink: { y: 0, opacity: 1 },
  };

  // Animation variants for tablet device links
  const tabletLinkVariants: Variants = {
    animateButtonHover: { x: "-50%" },
    animateHover: { scale: 1.15 },
  };

  return (
    <header className="px-4 fixed top-2 left-0 right-0 z-50">
      {/* Header bar container */}
      <div className="w-full h-12 mp-default rounded-full flex justify-between items-center relative">
        {/* Animated name header on scroll past hero */}
        <motion.h1
          className="text-2xl relative z-50"
          initial={{ opacity: 0, x: -10 }}
          animate={scrolled ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Andrew Aquino
        </motion.h1>

        {/* Hamburger menu for mobile devices */}
        <HamburgerMenu clicked={clicked} handleClick={handleClick} />

        {/* Dropdown menu container that animates for mobile devices */}
        <motion.div
          className="transparent-blur w-full h-full rounded-3xl absolute inset-0"
          initial="initial"
          animate={clicked ? "animateExpand" : undefined}
          transition={{ type: "spring", bounce: 0.25, visualDuration: 0.25 }}
          variants={dropdownVariants}
        >
          {/* Mobile links container */}
          <motion.div
            className={`${
              clicked ? `block` : `hidden`
            } text-xl h-full mp-default pt-8 flex flex-col justify-center gap-8`}
            initial="initial"
            animate={clicked ? "animateLink" : undefined}
            variants={{
              // Variant for parent container to delay and stagger children animateLink
              animateLink: {
                transition: { delayChildren: 0.1, staggerChildren: 0.05 },
              },
            }}
          >
            {/* Resume mobile link */}
            <motion.a
              href="#"
              className="dropdown-links"
              variants={mobileLinkVariants}
            >
              <img src={resumeIcon} alt="Resume icon" className="w-8 h-auto" />
              Resume
            </motion.a>

            {/* GitHub mobile link */}
            <motion.a
              href="#"
              target="_blank"
              className="dropdown-links"
              variants={mobileLinkVariants}
            >
              <img src={gitHubIcon} alt="GitHub icon" className="w-8 h-auto" />
              GitHub
            </motion.a>

            {/* LinkedIn mobile link */}
            <motion.a
              href="#"
              target="_blank"
              className="dropdown-links"
              variants={mobileLinkVariants}
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn icon"
                className="w-8 h-auto"
              />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Header for tablet devices */}
        <div className="hidden md:flex items-center gap-4 relative z-10">
          {/* Resume tablet link */}
          <motion.a
            href="#"
            className="font-bold px-3 py-1 rounded-full overflow-hidden relative"
            whileHover="animateButtonHover"
          >
            {/* Button animated background */}
            <motion.div
              className="button-gradient w-[250%] h-full absolute inset-0 -z-10"
              transition={{ duration: 1, ease: "easeInOut" }}
              variants={tabletLinkVariants}
            />
            Resume
          </motion.a>

          {/* Github tablet link */}
          <motion.a
            href="#"
            target="_blank"
            initial="initial"
            whileHover="animateHover"
            transition={{ type: "spring", bounce: 0.25, visualDuration: 0.25 }}
            variants={tabletLinkVariants}
          >
            <img src={gitHubIcon} alt="GitHub icon" className="w-6 h-auto" />
          </motion.a>

          {/* LinkedIn tablet link */}
          <motion.a
            href="#"
            target="_blank"
            initial="initial"
            whileHover="animateHover"
            transition={{ type: "spring", bounce: 0.25, visualDuration: 0.25 }}
            variants={tabletLinkVariants}
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
