import { motion } from "motion/react";
import headshot from "../../assets/images/headshot.jpeg";

const About = () => {
  return (
    <section aria-label="About" className="relative">
      {/* Gradient background */}
      <div className="bg-gradient-default">
        <motion.div
          className="bg-radial-[at_100%_50%] from-indigo from-0% to-eerie to-50% w-128 h-128"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* About container */}
      <div className="mp-default flex flex-col gap-4">
        {/* About header */}
        <h1>About Me</h1>

        {/* Text card */}
        <div className="card transparent-blur card-shadow col-span-full">
          <p className="text-balance">
            Hello and nice to meet you! My name is Andrew Aquino and I'm a
            software engineer for Revature and freelance full stack developer
            who enjoys creating accessible, aesthetically pleasing websites. I
            specialize in TypeScript, React, Tailwind CSS, and I focus on clean
            design, responsiveness, and accessibility. As a software engineer
            for Revature, I train in client-specific tech stacks to easily
            integrate into development teams and production environments and
            instantly contribute robust, clean code. As a freelance full stack
            developer, I collaborate with local businesses and entrepreneurs to
            deliver modern, responsive, and SEO optimized websites for free with
            little to no overhead. I'm always on the lookout for freelance or
            full-time opportunities!
          </p>
        </div>

        {/* Card container */}
        <div className="flex flex-col gap-4 sm:grid sm:grid-rows-1 sm:grid-cols-2">
          {/* Image card */}
          <div className="card-shadow flex justify-center items-center">
            <img
              src={headshot}
              alt="Headshot image"
              className="object-cover w-full h-full rounded-4xl"
            />
          </div>

          {/* Fun facts */}
          <div className="card transparent-blur card-shadow flex flex-col gap-2">
            <h2 className="text-lg font-bold">A little more about me!</h2>

            <ul className="pl-4 flex flex-col gap-2">
              <li className={`list-["🥊"] pl-2`}>
                I began practicing boxing at 16 years old and my favorite boxer
                is Manny Pacquiao.
              </li>

              <li className={`list-["🍳"] pl-2`}>
                I love cooking all kinds of cultural foods. My top 3 food
                cultures as of right now, and always subject to change:
                Filipino, Jamaican, Indian.
              </li>

              <li className={`list-["🏀"] pl-2`}>
                My favorite sports team of all time and for the rest of time is
                the Chicago Bulls (They'll make it to the finals again in my
                life time 🙏).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
