import { motion } from "framer-motion";

import educationData from "@/data/educationData";
import { itemsVariants } from "@/lib/animations";

import SectionComp from "@/components/Sections/SectionsComp";

export default function Education() {
  const content = (
    <motion.ul className="flex flex-col gap-8" variants={itemsVariants}>
      {educationData.map((education) => (
        <motion.li key={education.id} className="flex flex-col gap-4" variants={itemsVariants}>
          <h3 className="text-md font-semibold">
            {education.title}{" "}
            <span className="text-muted-foreground font-normal no-underline">
              - {education.establishment}
            </span>
          </h3>
          <span className="text-secondary-foreground text-xs font-light">{education.date}</span>
          <p className="text-muted-foreground font-normal text-ms">{education.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  );

  return <SectionComp title="education" content={content} />;
}
