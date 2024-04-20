import educationData from "@/data/educationData";

import SectionComp from "@/components/Sections/SectionsComp";

export default function Education() {
  const content = (
    <ul className="flex flex-col gap-8">
      {educationData.map((education) => (
        <li key={education.id} className="flex flex-col gap-4">
          <h3 className="text-md font-semibold">
            {education.title}{" "}
            <span className="text-muted-foreground font-normal no-underline">
              - {education.establishment}
            </span>
          </h3>
          <span className="text-secondary-foreground text-xs font-light">{education.date}</span>
          <p className="text-muted-foreground font-normal text-ms">{education.description}</p>
        </li>
      ))}
    </ul>
  );

  return <SectionComp title="education" content={content} />;
}
