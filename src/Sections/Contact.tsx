import SectionMobileComp from "@/components/Sections/SectionsComp";

import cv from "@/assets/cv-arthur-broudoux-2024.pdf";

export default function Contact() {
  const content = (
    <p className="text-xs font-normal mb-3 text-white/70">
      Let's work together ! You can contact me{" "}
      <a href="mailto:arthur.broudoux@gmail.com" className="text-white font-semibold">
        by mail
      </a>{" "}
      or via{" "}
      <a
        href="https://www.linkedin.com/in/abroudoux/"
        target="_blank"
        className="text-white font-semibold">
        Linkedin
      </a>
      . You can also check my{" "}
      <a href={cv} className="text-white font-semibold" target="_blank">
        CV
      </a>
      .
    </p>
  );
  return <SectionMobileComp title="contact" content={content} />;
}
