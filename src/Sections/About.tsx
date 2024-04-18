import SectionsComp from "@/components/Sections/SectionsComp";

export default function About() {
  const content = (
    <>
      <p className="text-ms font-normal mb-3">
        I'm a student in web development at Epitech in Rennes. I'm passionate about new technologies
        and programming. I'm also aware of the importance of the user experience and the design of
        an application. I'm always looking for new challenges and I'm motivated to learn new
        technologies by contributing to public projets.
      </p>
      <p className="text-ms font-normal">
        I'm looking for an Internship in web development from January 2024 near to Rennes. I'm
        conviced that I can bring a lot to a new company and I'm motivated to face new challenges.
      </p>
    </>
  );

  return <SectionsComp title="about" content={content} />;
}
