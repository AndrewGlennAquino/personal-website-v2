import { useEffect } from "react";
import { motion, useAnimate, stagger, type Variants } from "motion/react";

/**
 * Hero component that contains greetings, name, and title
 */
const Hero = () => {
  // Motion hook that control the sequence of animation triggers
  const [scope, animate] = useAnimate();

  // Use effect to play animations in sequence once on mount
  useEffect(() => {
    const sequence = async () => {
      await animate(
        "span",
        { y: [-15, 0], opacity: [0, 1] },
        {
          delay: stagger(0.25, { startDelay: 1 }),
          duration: 0.75,
          ease: "easeOut",
        }
      );
    };

    sequence();
  }, []);

  // Animation variants for fade in, rotation, and movement of gradient background
  const gradientBackgroundVariants: Variants = {
    initial: { opacity: 0 },
    animateFadeIn: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    animateRotate: {
      rotate: 360,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      },
    },
    animateMovement: {
      y: ["-100%", 0],
      transition: {
        duration: 2,
        ease: "easeOut",
      }
    }
  };

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="w-full h-full flex justify-center items-center absolute inset-0 -z-20">
        <motion.div
          className="hero-gradient w-64 h-64 rounded-full"
          initial="initial"
          animate={["animateFadeIn", "animateRotate", "animateMovement"]}
          variants={gradientBackgroundVariants}
        />
      </div>

      {/* Background blur filter */}
      <div className="backdrop-blur-3xl w-full h-full absolute inset-0 -z-10" />

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
