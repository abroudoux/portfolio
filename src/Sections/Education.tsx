import { motion } from "framer-motion";

import educationData from "@/data/educationData";
import { itemsVariants } from "@/lib/animations";

import SectionComp from "@/components/Sections/SectionsComp";

export default function Education() {
  const content = (
    <motion.ul className="flex flex-col gap-8" variants={itemsVariants}>
      {educationData.map((education) => (
        <motion.li key={education.id} className="flex flex-col gap-2" variants={itemsVariants}>
          <h3 className="font-semibold text-sm pb-1">
            {education.title}{" "}
            <span className="text-muted-foreground font-normal text-xs">
              - {education.establishment}
            </span>
          </h3>
          <p className="text-muted-foreground font-normal text-xs">{education.description}</p>
          <span className="text-secondary-foreground text-[8px] font-normal">{education.date}</span>
        </motion.li>
      ))}
    </motion.ul>
  );

  return <SectionComp title="education" content={content} />;
}
