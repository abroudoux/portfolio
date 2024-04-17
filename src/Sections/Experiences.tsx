import experiencesData from "@/data/experiencesData";

import SectionsComp from "@/components/Mobile/SectionsComp";
import { Badge } from "@/components/ui/badge";

export default function Experiences() {
  const content = (
    <ul className="flex flex-col gap-4">
      {experiencesData.map((experience) => (
        <li key={experience.id} className="flex flex-col gap-2">
          <h3 className="text-xs underline font-semibold">
            {experience.name} - {experience.company}
          </h3>
          <span className="text-white/40 text-[10px] font-light">{experience.date}</span>
          <p className="text-white/70 font-normal text-xs">{experience.description}</p>
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
