import { useEffect } from "react";
import { motion, useAnimate, stagger } from "motion/react";

/**
 * Hero component that contains greetings, name, and title
 */
const Hero = () => {
  // Motion hook that control the sequence of animation triggers
  const [scope, animate] = useAnimate();

  // Use effect to play animations in sequence once on mount
  useEffect(() => {
    const sequence = async () => {
      await animate([
        [
          "span",
          { y: [-15, 0], opacity: [0, 1] },
          {
            delay: stagger(0.25, { startDelay: 0.5 }),
            duration: 0.75,
            ease: "easeOut",
          },
        ],
      ]);
    };

    sequence();
  }, []);

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="bg-gradient-to-br from-eerie via-indigo/25 to-eerie w-[200vw] h-[200vh] absolute inset-0 -z-30"
        animate={{
          x: "-50%",
          y: "-50%",
          transition: {
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      {/* Hero container */}
      <div
        className="container h-screen max-h-180 mp-default mt-0 pt-12 flex flex-col justify-center items-center gap-4"
        ref={scope}
      >
        {/* Hero text container */}
        <div className="flex flex-col gap-2">
          <span className="hero-header">Hello!</span>
          <span className="hero-header">My name is Andrew Aquino</span>
          <span className="hero-subtext">And I'm a Frontend Developer</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
