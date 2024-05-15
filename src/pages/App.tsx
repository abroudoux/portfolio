import { motion } from "framer-motion";

import Header from "@/Sections/Header";
import About from "@/Sections/About";
import Projects from "@/Sections/Projects";
import Experiences from "@/Sections/Experiences";
import Education from "@/Sections/Education";
import Skills from "@/Sections/Skills";
import Contact from "@/Sections/Contact";
import Footer from "@/Sections/Footer";
import MusicPlayer from "@/Sections/MusicPlayer";

export default function App() {
  return (
    <motion.main className="w-full max-w-3xl p-2" initial="hidden" animate="visible">
      <Header />
      <About />
      <Contact />
      <Projects />
      <Experiences />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <MusicPlayer />
    </motion.main>
  );
}
