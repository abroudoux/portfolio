import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import projectsData from "@/data/projects";

export default function Project() {
  const { title } = useParams();

  return (
    <section className="section flex-col-center-center relative">
      <motion.div
        className="w-full h-full rounded-xl flex-col backdrop-blur-sm border-2 z-10"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
        <div className="w-full h-auto flex-row-start-start mb-4 p-8">
          <h1 className="text-6xl">{title}</h1>
        </div>
        <div className="bg-red-500 w-full h-[40vh]"></div>
      </motion.div>
    </section>
  );
}
