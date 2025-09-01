import { useEffect } from "react";
import { motion, useAnimate, useInView } from "motion/react";
import headshot from "../../assets/images/headshot.jpeg";

/**
 * About component that contains basic information, picture, and fun facts
 */
const About = () => {
  // Controllers for animation sequence
  const [scope, animate] = useAnimate();

  // Trigger rerender when half of the component is in viewport
  const isInView = useInView(scope, { amount: 0.35 });

  // Trigger animation sequence after isInView rerender
  useEffect(() => {
    const sequence = async () => {
      await animate(
        "#about-container",
        { opacity: 1 },
        { delay: 0.15, duration: 2, ease: "easeOut" }
      );
      await animate(
        "#about-bg-gradient",
        { opacity: 1 },
        { delay: 0.15, duration: 2, ease: "easeOut" }
      );
    };

    if (isInView) {
      sequence();
    }
  }, [isInView]);

  return (
    <section aria-label="About" className="relative" ref={scope}>
      {/* Gradient background */}
      <div className="bg-gradient-default">
        <motion.div
          id="about-bg-gradient"
          className="bg-radial-[at_100%_50%] from-indigo from-0% to-night to-50% w-128 h-128"
          initial={{ opacity: 0 }}
        />
      </div>

      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* About container */}
      <motion.div
        id="about-container"
        className="mp-default flex flex-col gap-4"
        initial={{ opacity: 0 }}
      >
        {/* About header */}
        <h1>A Little About Me</h1>

        {/* Text card */}
        <div className="card transparent-blur card-shadow col-span-full">
          <p>
            Hello and nice to meet you! My name is Andrew Aquino and I'm a full
            stack developer who enjoys creating accessible, aesthetically
            pleasing websites. I specialize in TypeScript, React, Tailwind CSS,
            Node, Express, and PostgreSQL, and I focus on clean design,
            responsiveness, accessibility, and robust architecture.
            <br />
            <br />
            As the sole Founding Full Stack Engineer at ChemTek, I lead design,
            architecture, and infrastructure decisions, leveraging free and
            cost-effective technologies that allow for scalability as the
            company grows. As a freelance full stack developer, I collaborate
            with local businesses and entrepreneurs to deliver modern,
            responsive, and SEO optimized websites for free as community
            service, helping small businesses thrive in the digital space.
          </p>
        </div>

        {/* Card container */}
        <div className="flex flex-col gap-4 sm:grid sm:grid-rows-1 sm:grid-cols-2">
          {/* Image card */}
          <div className="card-shadow flex justify-center items-center">
            <img
              src={headshot}
              alt="Headshot image"
              className="object-cover w-full h-full rounded-md"
              loading="lazy"
            />
          </div>

          {/* Fun facts */}
          <div className="card transparent-blur card-shadow flex flex-col gap-2">
            <h2 className="text-lg font-bold">A Little More About Me!</h2>

            <ul className="pl-4 flex flex-col gap-2">
              <li className={`list-["🥊"] pl-2`}>
                I began practicing boxing at 16 years old and my favorite boxer
                is Manny Pacquiao.
              </li>

              <li className={`list-["🍳"] pl-2`}>
                I love cooking all kinds of cultural foods. Top 3 food cultures
                I can straight up devour: Filipino, Jamaican, and Indian.
                Honorable mention -- Middle Eastern cuisine.
              </li>

              <li className={`list-["⚔"] pl-2`}>
                I have over 500 hours of experience as a commander in simulated,
                real-time medieval battles where I use my expertise to fend of
                attackers from key strongholds and launch counter offensive
                measures against enemies (Total War || Mount and Blade).
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
