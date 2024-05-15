import { FC } from "react";

import { MusicDataProps } from "@/utils/types";

const MusicCard: FC<MusicDataProps> = (props) => {
  return (
    <li className="w-full p-2 flex items-end gap-2 hover:bg-secondary rounded hover:cursor-pointer">
      <img
        src={props.coverUrl}
        className="w-12 h-auto rounded"
        alt={`${props.title} by ${props.artist} cover `}
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-xs font-medium text-background-foregournd">{props.title}</h2>
        <p className="text-xxs text-muted-foreground">{props.artist}</p>
      </div>
    </li>
  );
};

export default MusicCard;
