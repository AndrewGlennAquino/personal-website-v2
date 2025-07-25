import { useState } from "react";
import { motion, type Variants } from "motion/react";
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

  // Function that sets clicked state to its inverse
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Animation variants that expand the dropdown menu on hamburger menu click
  const dropdownVariants: Variants = {
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

  // Animation variants that animate the dropdown menu links
  const mobileLinkVariants: Variants = {
    initial: {
      y: -25,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      },
    },
    animateLink: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      },
    },
  };

  // Animation variants for tablet device links
  const tabletLinkVariants: Variants = {
    initial: {
      transition: { type: "spring", bounce: 0.25, visualDuration: 0.25 },
    },
    animateHover: {
      scale: 1.15,
      transition: { type: "spring", bounce: 0.25, visualDuration: 0.25 },
    },
  };

  return (
    <header className="px-4 fixed top-0 left-0 right-0 z-50">
      {/* Header bar container */}
      <div className="container mp-default w-full max-w-160 h-12 rounded-full flex justify-between items-center relative">
        {/* Temporary logo */}
        <h1 className="text-2xl relative z-50">
          Placeholder
        </h1>

        {/* Hamburger menu for mobile devices */}
        <HamburgerMenu clicked={clicked} handleClick={handleClick} />

        {/* Dropdown menu container that animates for mobile devices */}
        <motion.div
          className="bg-smoke/5 backdrop-blur-sm w-full h-full rounded-3xl absolute inset-0"
          initial="initial"
          animate={clicked ? "animateExpand" : undefined}
          variants={dropdownVariants}
        >
          {/* Links container that staggers mobile device link animations */}
          <motion.div
            className={`${
              clicked ? `block` : `hidden`
            } text-xl h-full mp-default pt-8 flex flex-col justify-center gap-8`}
            initial="initial"
            animate={clicked ? "animateLink" : undefined}
            variants={{
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
            className="button-gradient font-bold px-3 py-1 rounded-full"
            initial="initial"
            whileHover="animateHover"
            variants={tabletLinkVariants}
          >
            Resume
          </motion.a>

          {/* Github tablet link */}
          <motion.a
            href="#"
            target="_blank"
            initial="initial"
            whileHover="animateHover"
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
