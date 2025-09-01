import { motion, useAnimate, useInView } from "motion/react";
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

// Each logo has an image source and alt strings
type Logo = {
  src: string;
  alt: string;
};

interface ProjectCardProps {
  src: string;
  logos: Logo[];
  children: string;
}

/**
 * ProjectCard component that takes an image source,
 * array of logos, and children text.
 *
 * @param props src, logos, children
 */
const ProjectCard = ({ src, logos, children }: ProjectCardProps) => {
  return (
    <div
      aria-label={`${children}-card`}
      className="transparent-blur card-shadow"
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
          <h2 className="project-card-header">{children}</h2>

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
    </div>
  );
};

/**
 * Projects container that holds interactive project cards
 */
export const Projects = () => {
  // Controllers for animation sequence
  const [scope, animate] = useAnimate();

  // Trigger rerender when half of the component is in viewport
  const isInView = useInView(scope, { amount: 0.35 });

  // Trigger animation sequence after isInView rerender
  useEffect(() => {
    const sequence = async () => {
      await animate(
        "#projects-container",
        { opacity: 1 },
        { duration: 2, ease: "easeOut" }
      );
      await animate(
        "#projects-bg-gradient",
        { opacity: 1 },
        { duration: 2, ease: "easeOut" }
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
          className="bg-radial-[at_0%_50%] from-tangerine/75 to-night w-128 h-128"
          initial={{ opacity: 0 }}
        />
      </div>

      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* Projects container */}
      <motion.div
        id="projects-container"
        className="mp-default flex flex-col gap-4"
        initial={{ opacity: 0 }}
      >
        {/* Projects header */}
        <h1>I Made These!</h1>

        {/* Project card container */}
        <div className="flex flex-col gap-4 sm:grid grid-cols-2 sm:gap-2">
          <ProjectCard
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
            src={personalwebsitev1Screenshot}
            logos={[
              { src: javaScriptLogo, alt: "JavaScript" },
              { src: reactLogo, alt: "React" },
            ]}
          >
            Personal Website v1
          </ProjectCard>
        </div>
      </motion.div>
    </section>
  );
};
