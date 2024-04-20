import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

import { ProjectDataProps } from "@/utils/types";

import { Badge } from "@/components/ui/badge";

const ProjectCard: FC<ProjectDataProps> = (props) => {
  return (
    <li className="group">
      <a
        href={props.repository}
        target="_blank"
        className="w-full p-6 rounded-lg border-border border-2 hover:border-3 flex-row-center-between group-hover:border-primary transition-colors">
        <div className="flex-col-start-start gap-2 w-5/6 h-full">
          <h3 className="text-md inline">
            {props.title}{" "}
            <span>
              <Badge variant={"secondary"}>{props.status}</Badge>
            </span>
          </h3>
          <p className="text-ms font-normal text-muted-foreground">{props.description}</p>
        </div>
        <div className="h-full flex-col-center-center w-1/6 group-hover:p-2">
          <ArrowUpRight size={24} />
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
