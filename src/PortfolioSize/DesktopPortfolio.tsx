import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import useStore from "@/lib/store";

import Home from "@/SectionsDesktop/Home";
import Projects from "@/SectionsDesktop/Projects";
import About from "@/SectionsDesktop/About";

import Menu from "@/components/Menu/Menu";

export default function DesktopPortfolio() {
  const { isProjectCardHovered, isTextHovered } = useStore();

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Menu />
      <motion.div
        className={`${
          isProjectCardHovered || isTextHovered ? "cursor-hover" : "cursor"
        } flex-col-center-center`}>
        {isProjectCardHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <ArrowUpRight className="w-8 h-8 transition-all delay-500" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
