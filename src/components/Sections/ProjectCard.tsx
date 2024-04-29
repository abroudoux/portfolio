import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { itemsVariants } from "@/lib/animations";
import { ProjectDataProps } from "@/utils/types";

import { Badge } from "@/components/ui/badge";

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
          <h3 className="text-md inline">
            {props.title}{" "}
            <span>
              <Badge variant={"secondary"}>{props.status}</Badge>
            </span>
          </h3>
          <p className="text-ms font-normal text-muted-foreground">{props.description}</p>
        </div>
        <div className="h-full flex-col-center-center w-1/8">
          <ArrowUpRight size={24} />
        </div>
      </a>
    </motion.li>
  );
};

export default ProjectCard;
