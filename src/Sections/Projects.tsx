import { motion } from "framer-motion";

import projectsData from "@/data/projectsData";
import { itemsVariants } from "@/lib/animations";

import SectionsComp from "@/components/Sections/SectionsComp";
import ProjectCard from "@/components/Sections/ProjectCard";

export default function Projects() {
  const content = (
    <motion.ul className="flex flex-col gap-5 w-full">
      {projectsData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </motion.ul>
  );

  return <SectionsComp title="projects" content={content} />;
}
