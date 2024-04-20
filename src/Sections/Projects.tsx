import projectsData from "@/data/projectsData";

import SectionsComp from "@/components/Sections/SectionsComp";
import ProjectCard from "@/components/Sections/ProjectCard";

export default function Projects() {
  const content = (
    <ul className="flex flex-col gap-5 w-full">
      {projectsData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </ul>
  );

  return <SectionsComp title="projects" content={content} />;
}
