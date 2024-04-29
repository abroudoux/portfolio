import { motion } from "framer-motion";

import experiencesData from "@/data/experiencesData";
import { itemsVariants } from "@/lib/animations";

import SectionsComp from "@/components/Sections/SectionsComp";
import { Badge } from "@/components/ui/badge";

export default function Experiences() {
  const content = (
    <motion.ul className="flex flex-col gap-8" variants={itemsVariants}>
      {experiencesData.map((experience) => (
        <motion.li key={experience.id} className="flex flex-col gap-4" variants={itemsVariants}>
          <a className="text-ms underline font-semibold" href={experience.siteUrl} target="_blank">
            {experience.name} - {experience.company}
          </a>
          <span className="text-secondary-foreground text-xs font-light">{experience.date}</span>
          <p className="text-muted-foreground font-normal text-ms">{experience.description}</p>
          <ul className="flex flex-row items-center gap-1">
            {experience.technos.map((techno) => (
              <Badge key={techno}>{techno}</Badge>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ul>
  );

  return <SectionsComp title="experiences" content={content} />;
}
