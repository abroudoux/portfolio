import skillsData from "@/data/skillsData";

import SectionsComp from "@/components/Mobile/SectionsComp";

export default function Skills() {
  const content = (
    <ul className="flex flex-col gap-4">
      {skillsData.map((skill) => (
        <li key={skill.id} className="flex flex-col gap-2">
          <h3 className="text-xs underline font-semibold">{skill.name}</h3>
          <p className="text-white/70 font-normal text-xs">{skill.technos.join(", ")}</p>
        </li>
      ))}
    </ul>
  );

  return <SectionsComp title="skills" content={content} />;
}
