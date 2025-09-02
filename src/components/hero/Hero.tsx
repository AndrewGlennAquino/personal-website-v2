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
      animateBackground(
        backgroundScope.current,
        { opacity: [0, 1] },
        { delay: 0.25, duration: 1, ease: "easeOut" }
      );
      await animateText(
        "span",
        { x: 0, opacity: 1 },
        {
          delay: stagger(0.25, { startDelay: 0.25 }),
          duration: 0.5,
          ease: "easeOut",
        }
      );
    };

    sequence();
  }, []);

  // Initial animation state for text
  const spanVariants: Variants = {
    initial: { x: -10, opacity: 0 },
  };

  return (
    <section aria-label="Hero" className="relative">
      {/* Animated gradient background */}
      <div className="bg-gradient-default">
        <div
          className="bg-conic/increasing from-indigo to-tangerine w-64 h-64 rounded-full"
          ref={backgroundScope}
        />
      </div>

      {/* Background blur filter */}
      <div className="bg-blur" />

      {/* Hero container */}
      <div
        className="h-screen max-h-256 mp-default py-16 flex flex-col justify-center items-center gap-4"
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
            And I'm a Full Stack Developer
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
