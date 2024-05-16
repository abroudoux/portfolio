import { FC } from "react";
import { Play } from "lucide-react";

import { MusicDataProps } from "@/utils/types";

const MusicCard: FC<MusicDataProps> = (props) => {
  return (
    <li className="w-full p-2 flex items-end gap-2 hover:bg-secondary rounded hover:cursor-pointer group">
      <div className="relative flex-col-center-center">
        <img
          src={props.coverUrl}
          className="w-12 h-auto rounded group-hover:opacity-75"
          alt={`${props.title} by ${props.artist} cover `}
        />
        <span className="absolute z-10 hidden group-hover:block transition-all">
          <Play size={16} />
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-xs font-medium text-background-foregournd">{props.title}</h2>
        <p className="text-xxs text-muted-foreground">{props.artist}</p>
      </div>
    </li>
  );
};

export default MusicCard;
