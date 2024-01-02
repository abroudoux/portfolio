import { useRef } from "react";
import { motion } from "framer-motion";

import { itemVariants } from "@/lib/animations";

import ProjectCard from "@/components/Projects/ProjectCard";

// import logoGithub from "@/assets/img/logo-github.png";


export default function Projects() {

    const scrollRef = useRef(null);

    return (
        <section className="section flex-col-center-center" id="projects" ref={scrollRef} style={{ overflow: "scroll" }}>
            <div className="w-full h-auto flex-row-start-between mb-4">
                <h1 className="text-6xl">projects</h1>
            </div>
            <motion.div className="w-full h-full flex-col-center-center gap-3" initial="hidden" whileInView="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0.3 } } }} viewport={{ once: true }} ref={scrollRef} style={{ overflow: "scroll" }}>
                <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
                    <motion.div className="w-3/4 h-full" variants={itemVariants}>
                        <ProjectCard title="test" link="/" tags={["personal project"]} />
                    </motion.div>
                    <motion.div className="w-1/4 h-full" variants={itemVariants}>
                        <ProjectCard title="test" link="/" tags={["personal project"]} />
                    </motion.div>
                </div>
                <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
                    <motion.div className="w-1/4 h-full" variants={itemVariants}>
                        <ProjectCard title="Wanna see more ?" link="https://github.com/abroudoux" tags={["social"]} image="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" />
                    </motion.div>
                    <motion.div className="w-3/4 h-full" variants={itemVariants}>
                        <ProjectCard title="test" link="/" tags={["personal project"]} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};