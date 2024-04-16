import SectionsComp from "@/components/Mobile/SectionsComp";

export default function ExperiencesMobile() {
  const content = (
    <ul className="flex flex-col gap-4">
      <li className="flex flex-col gap-2">
        <h3 className="text-xs underline font-semibold">
          Internship web developper - Coquille Consulting
        </h3>
        <span className="text-white/40 text-[10px] font-light">2023 - august 2024</span>
        <p className="text-white/70 font-normal text-xs">
          As a web developer intern, I am in charge of the development of the company's websites.
          I'm in charge of the creation of the different themes and the development of the back-end
          part of the websites. I also work on the company's internal tools.
        </p>
      </li>
      <li className="flex flex-col gap-2">
        <h3 className="text-xs underline font-semibold">
          Internship web developper - Krakn Behavioural
        </h3>
        <span className="text-white/30 text-[10px] font-light">2023</span>
        <p className="text-white/70 font-normal text-xs">
          My role as a web developper intern was to develop the company's website. I was also in
          charge of the development of a specific website for the company which was used for the
          company's internal use during meetings and presentations.
        </p>
      </li>
    </ul>
  );

  return <SectionsComp title="experiences" content={content} />;
}
