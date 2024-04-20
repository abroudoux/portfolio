import SectionsComp from "@/components/Sections/SectionsComp";
import HightlightString from "@/components/Sections/Highlightstring";

export default function About() {
  const content = (
    <div className="text-ms font-normal mb-3 leading-8">
      <p className="mb-3">
        I'm a student in web development at <HightlightString icon="📚" text="Epitech" /> in Rennes.
        I'm passionate about new technologies and programming. I'm also aware of the importance of
        the <HightlightString icon="👤" text="user experience" /> and the design of an application.
        I'm always looking for new challenges and I'm motivated to learn new technologies by
        contributing to public projets.
      </p>
      <p>
        I'm looking for an Internship in web development from January 2024 near to{" "}
        <HightlightString icon="📍" text="Rennes" />. I'm conviced that I can bring a lot to a new
        company and I'm motivated to face new challenges.
      </p>
    </div>
  );

  return <SectionsComp title="about" content={content} />;
}
