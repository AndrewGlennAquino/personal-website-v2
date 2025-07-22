import { useState, useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import Sun from "../../assets/three/Sun.jsx";

/**
 * Hero component that contains animated sun, greetings, name, and title
 */
const Hero = () => {
  // Hold in state when sun animation begins
  const [animateSun, setAnimateSun] = useState(false);

  // Motion hook that control the sequence of animation triggers
  const [scope, animate] = useAnimate();

  // Use effect to play animations in sequence once on mount, then animate sun
  useEffect(() => {
    const sequence = async () => {
      await animate([
        [
          "span",
          { y: [-15, 0], opacity: [0, 1] },
          { delay: stagger(0.25, { startDelay: 0.5 }), duration: 0.75, ease: "easeOut" },
        ],
      ]);

      setAnimateSun(true);
    };

    sequence();
  }, []);

  return (
    <section aria-label="Hero">
      {/* Hero container */}
      <div className="container h-screen max-h-180 mp-default mt-0 pt-12 flex flex-col items-center gap-4">
        {/* Animated sun */}
        <Sun animate={animateSun} />

        {/* Hero text container */}
        <div className="flex flex-col gap-2" ref={scope}>
          <span className="hero-header">
            Hello!
          </span>

          <span className="hero-header">
            My name is Andrew Aquino
          </span>

          <span className="hero-subtext">
            And I'm a Frontend Developer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
