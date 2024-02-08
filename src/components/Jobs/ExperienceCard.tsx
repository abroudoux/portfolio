import { FC } from "react";

import { ExperienceCardProps } from "@/types/types";
import { Badge } from "@/components/ui/badge";

const ExperienceCard: FC<ExperienceCardProps> = (props) => {
  return (
    <div className="w-full h-auto flex-row-start-center mb-12">
      <div className="w-1/4 flex-row-center-start">
        <p className="text-md text-muted-foreground">{props.date}</p>
      </div>
      <div className="w-full flex-col-start-start">
        <div className="w-full flex-row-center-start"></div>
        <h3 className="text-2xl font-medium mb-4">
          {props.post} • {props.name}
        </h3>
        <p className="text-base leading-7 font-light text-muted-foreground mb-6">
          {props.description}
        </p>
        <div className="flex-row-center-start gap-2">
          {props.technos.map((techno) => (
            <Badge key={techno} variant="outline">
              {techno}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
