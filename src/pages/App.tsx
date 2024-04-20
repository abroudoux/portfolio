import Header from "@/sections/Header";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experiences from "@/sections/Experiences";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <div className="w-full max-w-3xl p-2">
      <Header />
      <About />
      <Projects />
      <Experiences />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}
