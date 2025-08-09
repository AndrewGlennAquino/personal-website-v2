import reactLogo from "../../assets/images/react-logo.png";
import typeScriptLogo from "../../assets/images/typescript-logo.png";
import javaScriptLogo from "../../assets/images/javascript-logo.png";
import tailwindLogo from "../../assets/images/tailwind-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import expressLogo from "../../assets/images/express-logo.png";
import javaLogo from "../../assets/images/java-logo.png";
import postgresqlLogo from "../../assets/images/postgresql-logo.png";

interface SkillCardProps {
  src: string;
  title: string;
  children: string;
}

/**
 * Interactive skill card that takes an image src, skill title, and children
 */
const SkillCard = ({ src, title, children }: SkillCardProps) => {
  return (
    <article className="transparent-blur card card-shadow flex flex-col items-center">
      <img src={src} alt={`${title}-logo`} className="w-20 h-20" />
      <h2 className="font-bold">{title}</h2>

      <p className="hidden">{children}</p>
    </article>
  );
};

const Skills = () => {
  return (
    <section aria-label="Skills" className="relative">
      {/* Gradient background */}
      <div className="bg-gradient-default">
        <div
          id="about-bg-gradient"
          className="bg-radial-[at_0%_50%] from-tangerine from-0% to-night to-50% w-64 h-64"
        />
      </div>

      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* Skills container */} 
      <div className="mp-default flex flex-col gap-4">
        {/* Skills header */}
        <h1>Skills</h1>

        {/* Interactive skill cards container */}
        <div className="grid grid-rows-4 grid-cols-2 sm:grid-rows-2 sm:grid-cols-4 gap-2">

          <SkillCard src={reactLogo} title="React">
            Things you have done with react
          </SkillCard>

          <SkillCard src={typeScriptLogo} title="TypeScript">
            Things you have done with react
          </SkillCard>

          <SkillCard src={javaScriptLogo} title="JavaScript">
            Things you have done with react
          </SkillCard>

          <SkillCard src={tailwindLogo} title="Tailwind">
            Things you have done with react
          </SkillCard>

          <SkillCard src={nodeLogo} title="Node">
            Things you have done with react
          </SkillCard>

          <SkillCard src={expressLogo} title="Express">
            Things you have done with react
          </SkillCard>
          
          <SkillCard src={javaLogo} title="Java">
            Things you have done with react
          </SkillCard>

          <SkillCard src={postgresqlLogo} title="PostgreSQL">
            Things you have done with react
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
