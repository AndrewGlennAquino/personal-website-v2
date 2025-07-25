import { useEffect } from "react";
import { motion, useAnimate, stagger, type Variants } from "motion/react";

/**
 * Hero component that contains greetings, name, and title
 */
const Hero = () => {
  // Motion hooks that control the sequence of animation triggers
  const [backgroundScope, animateBackground] = useAnimate();
  const [textScope, animateText] = useAnimate();

  // Use effect to play animations in sequence once on mount
  useEffect(() => {
    const sequence = async () => {
      await animateBackground(
        backgroundScope.current,
        { y: ["-100%", 0], opacity: [0, 1] },
        { delay: 0.5, duration: 1.5, ease: "easeInOut" }
      );
      await animateText(
        "span",
        { y: 0, opacity: 1 },
        {
          delay: stagger(0.15),
          duration: 0.4,
          ease: "easeOut",
        }
      );
      await animateBackground(
        backgroundScope.current,
        { opacity: [1, 0.5] },
        {
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }
      );
    };

    sequence();
  }, []);

  // Initial animation state for text
  const spanVariants: Variants = {
    initial: { y: 15, opacity: 0 },
  };

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="w-full h-full flex justify-center items-center absolute inset-0 -z-20">
        <div
          className="hero-gradient w-64 h-64 rounded-full"
          ref={backgroundScope}
        />
      </div>

      {/* Background blur filter and background texture */}
      <div className="backdrop-blur-3xl w-full h-full absolute inset-0 -z-10" />
      <div className="bg-[url(./assets/svgs/texture.svg)] opacity-50 w-full h-full absolute inset-0 -z-10" />

      {/* Hero container */}
      <div
        className="container border-smoke/5 border-b-2 rounded-4xl h-screen max-h-180 mp-default mt-0 pt-16 flex flex-col justify-center items-center gap-4"
        ref={textScope}
      >
        {/* Hero text container */}
        <div className="flex flex-col gap-2">
          <motion.span
            className="hero-header"
            initial="initial"
            variants={spanVariants}
          >
            Hello!
          </motion.span>

          <motion.span
            className="hero-header"
            initial="initial"
            variants={spanVariants}
          >
            My name is Andrew Aquino
          </motion.span>

          <motion.span
            className="hero-subtext"
            initial="initial"
            variants={spanVariants}
          >
            And I'm a Frontend Developer
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
