import { motion, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import chemtekScreenshot from "../../assets/images/chemtek-screenshot.png";
import typeScriptLogo from "../../assets/images/typescript-logo.png";
import javaScriptLogo from "../../assets/images/javascript-logo.png";
import reactLogo from "../../assets/images/react-logo.png";
import tailwindLogo from "../../assets/images/tailwind-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import expressLogo from "../../assets/images/express-logo.png";
import javaLogo from "../../assets/images/java-logo.png";
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

const ProjectCard = ({ src, logos, children }: ProjectCardProps) => {
  return (
    <article className="transparent-blur card-shadow">
      {/* Card image */}
      <img
        src={src}
        alt={`${children} website landing page screenshot`}
        className="object-cover object-center"
      />

      {/* Card content */}
      <div className="p-2">
        {/* Title and logo container */}
        <div className="flex items-center gap-1">
          {/* Card Title */}
          <h2 className="project-card-header">{children}</h2>

          {/* For each logo, create an image */}
          {logos.map((logo, index) => (
            <img
              key={`${children}-${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="project-card-logo"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  // Controllers for animation sequence
  const [scope, animate] = useAnimate();

  // Trigger rerender when half of the component is in viewport
  const isInView = useInView(scope, { amount: 0.35 });

  // Trigger animation sequence after isInView rerender
  useEffect(() => {
    const sequence = async () => {
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
          className="bg-radial-[at_0%_50%] from-tangerine from-0% to-night to-25% w-128 h-128"
          initial={{ opacity: 0 }}
        />
      </div>

      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* Projects container */}
      <div className="mp-default flex flex-col gap-4">
        {/* Projects header */}
        <h1>Yes I Made These!</h1>

        {/* Project card container */}
        <div>
          <ProjectCard
            src={chemtekScreenshot}
            logos={[
              { src: reactLogo, alt: "React" },
              { src: typeScriptLogo, alt: "TypeScript" },
              { src: tailwindLogo, alt: "Tailwind" },
            ]}
          >
            ChemTek
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
