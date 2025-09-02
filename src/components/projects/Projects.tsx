import { motion, useAnimate, useInView, stagger } from "motion/react";
import { useEffect } from "react";
import chemtekScreenshot from "../../assets/images/chemtek-screenshot.png";
import fithausScreenshot from "../../assets/images/fithaus-screenshot.png";
import brewnbubbleScreenshot from "../../assets/images/brewnbubble-screenshot.png";
import personalwebsitev1Screenshot from "../../assets/images/personalwebsitev1-screenshot.png";
import typeScriptLogo from "../../assets/images/typescript-logo.png";
import javaScriptLogo from "../../assets/images/javascript-logo.png";
import reactLogo from "../../assets/images/react-logo.png";
import tailwindLogo from "../../assets/images/tailwind-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import expressLogo from "../../assets/images/express-logo.png";
import postgresqlLogo from "../../assets/images/postgresql-logo.png";
import externalLinkIcon from "../../assets/icons/external-link-icon.svg";

// Each logo has an image source and alt strings
type Logo = {
  src: string;
  alt: string;
};

// Project card prop types
interface ProjectCardProps {
  href: string;
  src: string;
  logos: Logo[];
  children: string;
}

/**
 * ProjectCard component that takes an href,
 * image source, array of logos, and children text.
 *
 * @param props href, src, logos, children
 */
const ProjectCard = ({ href, src, logos, children }: ProjectCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      aria-label={`${children}-card`}
      className="transparent-blur card-shadow"
      initial={{ x: -10, opacity: 0 }}
      whileHover={{ scale: 1.025 }}
    >
      {/* Card image */}
      <img
        src={src}
        alt={`${children} website landing page screenshot`}
        className="object-cover object-center w-full h-auto max-h-60 rounded-t-md"
        loading="lazy"
      />

      {/* Card content */}
      <div className="p-2">
        {/* Title and logo container */}
        <div className="flex flex-col justify-center">
          {/* Card Title */}
          <div className="flex items-center gap-2">
            <h2 className="project-card-header">{children}</h2>
            <img src={externalLinkIcon} className="w-4 h-auto" />
          </div>

          <div className="flex gap-1">
            {/* For each logo, create an image */}
            {logos.map((logo, index) => (
              <img
                key={`${children}-${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="project-card-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

/**
 * Projects container that holds interactive project cards
 */
export const Projects = () => {
  // Controllers for animation sequence
  const [scope, animate] = useAnimate();

  // Trigger rerender when half of the component is in viewport
  const isInView = useInView(scope, { amount: 0.40 });

  // Trigger animation sequence after isInView rerender
  useEffect(() => {
    const sequence = async () => {
      await animate(
        "#projects-container h1",
        { x: 0, opacity: 1 },
        {
          delay: stagger(0.25),
          duration: 0.5,
          ease: "easeOut",
        }
      );
      await animate(
        "#project-card-container > *",
        { x: 0, opacity: 1 },
        {
          delay: stagger(0.25),
          duration: 0.5,
          ease: "easeOut",
        }
      );
      await animate(
        "#projects-bg-gradient",
        { opacity: 1 },
        { duration: 1, ease: "easeOut" }
      );
    };

    if (isInView) {
      sequence();
    }
  }, [isInView]);

  return (
    <section aria-label="Projects" className="relative" ref={scope}>
      {/* Gradient background */}
      <div className="bg-gradient-default">
        <motion.div
          id="projects-bg-gradient"
          className="bg-radial-[at_0%_50%] from-magenta/75 from-0% to-transparent to-75% w-128 h-128"
          initial={{ opacity: 0 }}
        />
      </div>

      {/* Background blur filter */}
      <div className="bg-blur" />

      {/* Projects container */}
      <div id="projects-container" className="mp-default flex flex-col gap-4">
        {/* Projects header */}
        <motion.h1 initial={{ x: -10, opacity: 0 }}>I Made These!</motion.h1>

        {/* Project card container */}
        <div
          id="project-card-container"
          className="flex flex-col gap-4 sm:grid grid-cols-2 sm:gap-4"
        >
          <ProjectCard
            href="https://chemtek.services"
            src={chemtekScreenshot}
            logos={[
              { src: typeScriptLogo, alt: "TypeScript" },
              { src: reactLogo, alt: "React" },
              { src: tailwindLogo, alt: "Tailwind" },
              { src: nodeLogo, alt: "Node" },
              { src: expressLogo, alt: "Express" },
              { src: postgresqlLogo, alt: "PostgreSQL" },
            ]}
          >
            ChemTek
          </ProjectCard>

          <ProjectCard
            href="https://andrewglennaquino.github.io/brew-n-bubble-website/"
            src={brewnbubbleScreenshot}
            logos={[
              { src: javaScriptLogo, alt: "JavaScript" },
              { src: reactLogo, alt: "React" },
              { src: tailwindLogo, alt: "Tailwind" },
            ]}
          >
            Brew 'n Bubble
          </ProjectCard>

          <ProjectCard
            href="https://andrewglennaquino.github.io/fit-haus-website/"
            src={fithausScreenshot}
            logos={[
              { src: javaScriptLogo, alt: "JavaScript" },
              { src: reactLogo, alt: "React" },
              { src: tailwindLogo, alt: "Tailwind" },
            ]}
          >
            Fithaus
          </ProjectCard>

          <ProjectCard
            href="https://andrewglennaquino.github.io/personal-website/"
            src={personalwebsitev1Screenshot}
            logos={[
              { src: javaScriptLogo, alt: "JavaScript" },
              { src: reactLogo, alt: "React" },
            ]}
          >
            Personal Website v1
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};
