import { motion, type Variants } from "motion/react";
import Sun from "../../assets/three/Sun.jsx";

/**
 * Hero component that contains animated sun, name, and title
 */
const Hero = () => {
  // Animation variants that staggers fade in animation for children
  const fadeInContainerVariants: Variants = {
    animateTypeWritter: {
      transition: { delayChildren: 0.25, staggerChildren: 0.25 },
    },
  };

  // Animation varaints to fade in content
  const fadeInVariants: Variants = {
    initial: { y: -5, opacity: 0 },
    animateTypeWritter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <section aria-label="Hero">
      {/* Hero background */}
      <div className="bg-gradient-to-b from-indigo/21 via-indigo/13 to-smoke h-screen absolute inset-0 -z-10" />

      {/* Hero container */}
      <div className="container h-screen max-h-180 mp-default mt-8 flex flex-col items-center gap-4">
        {/* Animated sun */}
        <Sun animate={true} />

        {/* Hero text container */}
        <motion.div
          className="flex flex-col gap-2"
          initial="initial"
          animate="animateTypeWritter"
          variants={fadeInContainerVariants}
        >
          <motion.span className="font-bold text-5xl" variants={fadeInVariants}>
            Hello!
          </motion.span>

          <motion.span className="font-bold text-5xl" variants={fadeInVariants}>
            My name is Andrew Aquino
          </motion.span>

          <motion.span className="font-bold text-2xl" variants={fadeInVariants}>
            And I'm a Frontend Developer
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
