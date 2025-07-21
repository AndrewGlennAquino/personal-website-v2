import Sun from "../../assets/three/Sun.jsx";

/**
 * Hero component that contains animated sun, name, and title
 */
const Hero = () => {
  return (
    <section 
      aria-label="Hero"
      className="h-screen"
    >
      {/* Hero background */}
      <div className="bg-gradient-to-b from-indigo/21 via-indigo/13 to-smoke h-screen absolute inset-0 -z-10" />

      {/* Hero container */}
      <div className="container h-full mp-default flex flex-col justify-center items-center gap-16">
        {/* Animated sun */}
        <Sun />

        {/* Hero text container */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl">Andrew Aquino</h1>
          <h2 className="font-bold text-2xl">Frontend Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
