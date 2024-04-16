import SectionMobileComp from "@/components/Mobile/SectionsMobileComp";

export default function ContactMobile() {
  const content = (
    <p className="text-xs font-normal mb-3 text-white/70">
      Let's work together ? You can contact me{" "}
      <a href="mailto:arthur.broudoux@gmail.com" className="text-white">
        by mail
      </a>{" "}
      or via{" "}
      <a href="https://www.linkedin.com/in/abroudoux/" target="_blank" className="text-white">
        Linkedin
      </a>
      .
    </p>
  );
  return <SectionMobileComp title="contact" content={content} />;
}
