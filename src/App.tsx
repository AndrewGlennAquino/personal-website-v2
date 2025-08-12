import Header from "./components/header/Header.tsx";
import Hero from "./components/hero/Hero.tsx";
import Quote from "./components/quote/Quote.tsx";
import About from "./components/about/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/projects/Projects.tsx";
import Footer from "./components/footer/Footer.tsx";

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
      <Footer />
    </>
  );
};

export default App;
