import { motion } from "framer-motion";

import Header from "@/Sections/Header";
import About from "@/Sections/About";
import Projects from "@/Sections/Projects";
import Experiences from "@/Sections/Experiences";
import Education from "@/Sections/Education";
import Skills from "@/Sections/Skills";
import Contact from "@/Sections/Contact";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

export default function App() {
  return (
    <motion.main className="w-full max-w-3xl p-2" initial="hidden" animate="visible">
      <Header />
      <About />
      <Projects />
      <Experiences />
      <Education />
      <Skills />
      <Contact />
      {/* <MusicPlayer /> */}
    </motion.main>
  );
}
