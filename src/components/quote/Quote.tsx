import { useEffect } from "react";
import { motion, useAnimate, useInView, stagger } from "motion/react";

/**
 * Quote container component that contains deep quote
 */
const Quote = () => {
  // Control the animation sequence for the border and quote
  const [scope, animate] = useAnimate();

  // Check if the component in view
  const isInView = useInView(scope, { amount: 0.5, once: true });

  // Quote as a string and split into an array
  const quote =
    '"Icarus laughed as he fell, for he knew to fall means to have once soared"';
  const quoteArray = quote.split(" ");

  // Animate sequence if isInView triggers a rerender
  useEffect(() => {
    const sequence = async () => {
      await animate("div", { opacity: 1 }, { duration: 1, ease: "easeOut" });
      await animate(
        "span",
        { opacity: 1 },
        { delay: stagger(0.15), duration: 1.35, ease: "easeIn" }
      );
    };

    if (isInView) {
      sequence();
    }
  }, [isInView]);

  return (
    <section aria-label="Quote" className="relative">
      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* Quote container */}
      <div
        className="flex justify-center items-center mp-default"
        ref={scope}
      >
        {/* Quote border */}
        <motion.div
          className="border-indigo border-y-2"
          initial={{ opacity: 0 }}
        >
          {/* p container for <span> elements for quote strings */}
          <p
            className="text-smoke/50 text-3xl font-serif py-4 md:px-8 flex flex-wrap justify-center items-center"
            aria-label={quote}
          >
            {/* Hide each span and use <p> aria-label as text */}
            {quoteArray.map((string, index) => (
              <motion.span
                key={`${string}-${index}`}
                aria-hidden="true"
                className="pl-1.5"
                initial={{ opacity: 0 }}
              >
                {`${string}`}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
