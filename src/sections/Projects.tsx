import { useRef } from "react";
import { motion } from "framer-motion";

import projectsData from "@/data/projects";
import { itemVariants } from "@/lib/animations";
import ProjectCard from "@/components/Projects/ProjectCard";
import HostelsManagementApp from "@/assets/img/hostels-management-app.png";
import UnChatLa from "@/assets/img/un-chat-la.png";
import GithubLogo from "@/assets/img/logo-github.png";
import SpotifyAutopush from "@/assets/img/spotify-autopush.png";

export default function Projects() {
  const scrollRef = useRef(null);
  return (
    <section
      className="section flex-col-center-center"
      id="projects"
      ref={scrollRef}
      style={{ overflow: "scroll" }}>
      <div className="w-full h-auto flex-row-start-start mb-4">
        <h1 className="text-6xl">projects</h1>
      </div>
      <motion.div
        className="w-full h-full flex-col-center-center gap-3 py-2"
        initial="hidden"
        whileInView="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        viewport={{ once: true }}
        ref={scrollRef}
        style={{ overflow: "scroll" }}>
        <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
          <motion.div className="w-3/4 h-full" variants={itemVariants}>
            <ProjectCard
              title={projectsData[0].title}
              link={projectsData[0].repository}
              tags={projectsData[0].tags}
              image={SpotifyAutopush}
            />
          </motion.div>
          <motion.div className="w-1/4 h-full" variants={itemVariants}>
            <ProjectCard
              title={projectsData[1].title}
              link={projectsData[1].repository}
              tags={projectsData[1].tags}
              image={UnChatLa}
            />
          </motion.div>
        </div>
        <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
          <motion.div className="w-1/4 h-full" variants={itemVariants}>
            <ProjectCard
              title="Wanna see more ?"
              link="https://github.com/abroudoux"
              tags={["social"]}
              image={GithubLogo}
              size="xs"
            />
          </motion.div>
          <motion.div className="w-3/4 h-full" variants={itemVariants}>
            <ProjectCard
              title={projectsData[2].title}
              link={projectsData[2].repository}
              tags={projectsData[2].tags}
              image={HostelsManagementApp}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
