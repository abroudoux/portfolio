import Header from "@/Sections/Header";
import About from "@/Sections/About";
import Projects from "@/Sections/Projects";
import Experiences from "@/Sections/Experiences";
import Education from "@/Sections/Education";
import Skills from "@/Sections/Skills";
import Contact from "@/Sections/Contact";

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
