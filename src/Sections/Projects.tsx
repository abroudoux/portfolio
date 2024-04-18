import { Badge } from "@/components/ui/badge";

import projectsData from "@/data/projectsData";

import SectionsComp from "@/components/Sections/SectionsComp";

export default function Projects() {
  const content = (
    <ul className="flex flex-col gap-5">
      {projectsData.map((project) => (
        <li key={project.id} className="flex flex-col gap-2">
          <h3 className="text-xs inline">
            <a href={project.repository} target="_blank" className="underline font-semibold">
              {project.title}
            </a>{" "}
            <span>
              <Badge variant={"secondary"}>{project.status}</Badge>
            </span>
          </h3>
          <p className="text-[12px] font-normal text-muted-foreground">{project.description}</p>
          <ul className="flex flex-row items-center gap-1">
            {project.technos.map((techno) => (
              <Badge key={techno}>{techno}</Badge>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return <SectionsComp title="projects" content={content} />;
}
