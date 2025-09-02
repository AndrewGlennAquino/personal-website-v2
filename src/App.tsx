import Header from "./components/header/Header.tsx";
import Hero from "./components/hero/Hero.tsx";
import { Quote } from "./components/quote/Quote.tsx";
import About from "./components/about/About.tsx";
import { Projects } from "./components/projects/Projects.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Quote />
      </main>
    </>
  );
};

export default App;
