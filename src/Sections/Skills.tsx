import { motion } from "framer-motion";

import skillsData from "@/data/skills.data";
import { itemsVariants } from "@/lib/animations";

import SectionsComp from "@/components/Sections/SectionsComp";

export default function Skills() {
  const content = (
    <motion.ul className="flex flex-col gap-4" variants={itemsVariants}>
      {skillsData.map((skill) => (
        <motion.li key={skill.id} className="flex flex-col gap-2" variants={itemsVariants}>
          <h3 className="text-sm font-semibold">{skill.name}</h3>
          <p className="text-muted-foreground font-normal text-xs">{skill.technos.join(", ")}</p>
        </motion.li>
      ))}
    </motion.ul>
  );

  return <SectionsComp title="skills" content={content} />;
}
