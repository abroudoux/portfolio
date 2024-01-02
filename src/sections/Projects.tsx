import { useRef } from "react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/Projects/ProjectCard";

import { itemVariants } from "@/lib/animations";


export default function Projects() {

    const scrollRef = useRef(null);

    return (
        <section className="section flex-col-center-center" id="projects" ref={scrollRef} style={{ overflow: "scroll" }}>
            <div className="w-full h-auto flex-row-start-between mb-4">
                <h1 className="text-6xl">projects</h1>
            </div>
            <motion.div className="w-full h-full flex-col-center-center gap-3" initial="hidden" whileInView="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0.3 } } }} viewport={{ once: true }} ref={scrollRef} style={{ overflow: "scroll" }}>
                <motion.div className="w-full h-2/4 py-1 flex-row-center-between gap-4" variants={itemVariants}>
                    <ProjectCard title="test" />
                    <ProjectCard title="test" />
                </motion.div>
                <motion.div className="w-full h-2/4 py-1 flex-row-center-between gap-4" variants={itemVariants}>
                    <ProjectCard title="Wanna see more ?" link="https://github.com/abroudoux" />
                    <ProjectCard title="test" />
                </motion.div>
            </motion.div>
        </section>
    );
};