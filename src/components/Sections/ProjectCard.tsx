import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { itemsVariants } from "@/lib/animations";
import { ProjectDataProps } from "@/utils/types";

const ProjectCard: FC<ProjectDataProps> = (props) => {
  return (
    <motion.li
      className="group"
      whileHover={{ y: -5 }}
      transition={{
        ease: [0, 0.71, 0.2, 1.01],
        duration: 0.5,
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      variants={itemsVariants}>
      <a
        href={props.repository}
        target="_blank"
        className="w-full p-6 rounded-lg border-border border-2 hover:border-3 flex-row-center-between group-hover:border-primary transition-colors">
        <div className="flex-col-start-start gap-2 w-7/8 h-full">
          <h3 className="text-ms flex items-end gap-2 font-semibold">{props.title}</h3>
          <span className="text-secondary-foreground text-sm font-normal">[{props.status}]</span>
          <p className="text-ms font-light text-muted-foreground">{props.description}</p>
        </div>
        <div className="h-full flex-col-center-center w-1/8">
          <ArrowUpRight size={24} />
        </div>
      </a>
    </motion.li>
  );
};

export default ProjectCard;
