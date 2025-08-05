import headshot from "../../assets/images/headshot.jpeg";

const About = () => {
  return (
    <section aria-label="About" className="relative">
      {/* Gradient background */}
      <div className="bg-gradient-default">
        <div className="bg-radial-[at_100%_100%] from-indigo from-0% to-eerie to-50% w-full h-full" />
      </div>

      {/* Background blur filter and background texture */}
      <div className="bg-blur" />
      <div className="bg-texture" />

      {/* About container */}
      <div className="mp-default">
        {/* About header */}
        <h1>About Me</h1>

        {/* Card container */}
        <div className="grid grid-rows-3 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-4">
          {/* Text card */}
          <div className="card transparent-blur card-shadow col-span-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus illo hic quaerat nihil. Iure aliquam doloremque
              tenetur quo, blanditiis culpa rerum vitae beatae ut deserunt
              laborum quas voluptatem eveniet aperiam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Suscipit eligendi nemo pariatur
              nisi perspiciatis corrupti debitis ab quibusdam placeat quasi
              fugit, blanditiis ex rerum ipsa, excepturi iusto tenetur
              accusantium nihil.
            </p>
          </div>

          {/* Image card */}
          <div className="card-shadow flex justify-center items-center">
            <img
              src={headshot}
              alt="Headshot image"
              className="object-cover w-full h-full rounded-4xl"
            />
          </div>

          {/* Fun facts */}
          <div className="card transparent-blur card-shadow">
            <h2>Fun facts:</h2>
            
            <ul>
              <li>Fun fact 1</li>
              <li>Fun fact 2</li>
              <li>Fun fact 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
