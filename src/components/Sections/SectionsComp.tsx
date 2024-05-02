import { FC } from "react";

import { SectionCompProps } from "@/utils/types";

const SectionComp: FC<SectionCompProps> = (props) => {
  return (
    <section className="w-full p-4 flex flex-col items-start my-5">
      <h2 className="text-lg font-semibold mb-6 italic font-platypi">{props.title}</h2>
      {props.content}
    </section>
  );
};

export default SectionComp;
