import { Badge } from "@/components/ui/badge";

import projectsData from "@/data/projects";

export default function ProjectsMobile() {
  return (
    <section className="w-100 p-4 flex flex-col items-start my-5">
      <h2 className="text-md font-semibold underline mb-4 italic">projects</h2>
      <ul className="flex flex-col gap-5">
        {projectsData.map((project) => (
          <li key={project.id} className="flex flex-col gap-2">
            <h3 className="text-xs underline font-semibold">{project.title}</h3>
            <p className="text-[12px] font-normal text-white/70">{project.description}</p>
            <ul className="flex flex-row items-center gap-1">
              {project.technos.map((techno) => (
                <Badge key={techno}>{techno}</Badge>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
