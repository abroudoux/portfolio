import { motion } from "framer-motion";

import experiencesData from "@/data/experiences.data";
import { itemsVariants } from "@/lib/animations";

import SectionsComp from "@/components/Sections/SectionsComp";
import { Badge } from "@/components/ui/badge";

export default function Experiences() {
  const content = (
    <motion.ul className="flex flex-col gap-8" variants={itemsVariants}>
      {experiencesData.map((experience) => (
        <motion.li key={experience.id} className="flex flex-col gap-4" variants={itemsVariants}>
          <h3>
            <a
              className="text-sm underline font-semibold"
              href={experience.siteUrl}
              target="_blank">
              {experience.name} - {experience.company}
            </a>
          </h3>
          <span className="text-secondary-foreground text-xs font-normal">{experience.date}</span>
          <p className="text-muted-foreground font-normal text-sm">{experience.description}</p>
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
