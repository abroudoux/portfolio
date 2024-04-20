import projectsData from "@/data/projectsData";

import SectionsComp from "@/components/Sections/SectionsComp";
import ProjectCard from "@/components/Sections/ProjectCard";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  // const content = (
  //   <ul className="flex flex-col gap-5">
  //     {projectsData.map((project) => (
  //       <li key={project.id} className="flex flex-col gap-2">
  //         <h3 className="text-md inline">
  //           <a href={project.repository} target="_blank" className="underline font-semibold">
  //             {project.title}
  //           </a>{" "}
  //           <span>
  //             <Badge variant={"secondary"}>{project.status}</Badge>
  //           </span>
  //         </h3>
  //         <p className="text-ms font-normal text-muted-foreground">{project.description}</p>
  //         <ul className="flex flex-row items-center gap-1">
  //           {project.technos.map((techno) => (
  //             <Badge key={techno}>{techno}</Badge>
  //           ))}
  //         </ul>
  //       </li>
  //     ))}
  //   </ul>
  // );

  const content = (
    <ul className="flex flex-col gap-5 w-full">
      {projectsData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </ul>
  );

  return <SectionsComp title="projects" content={content} />;
}
