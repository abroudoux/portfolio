import experiencesData from "@/data/experiencesData";

import SectionsComp from "@/components/Sections/SectionsComp";
import { Badge } from "@/components/ui/badge";

export default function Experiences() {
  const content = (
    <ul className="flex flex-col gap-4">
      {experiencesData.map((experience) => (
        <li key={experience.id} className="flex flex-col gap-2">
          <a className="text-xs underline font-semibold" href={experience.siteUrl} target="_blank">
            {experience.name} - {experience.company}
          </a>
          <span className="text-secondary-foreground text-[10px] font-light">
            {experience.date}
          </span>
          <p className="text-muted-foreground font-normal text-xs">{experience.description}</p>
          <ul className="flex flex-row items-center gap-1">
            {experience.technos.map((techno) => (
              <Badge key={techno}>{techno}</Badge>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return <SectionsComp title="experiences" content={content} />;
}
