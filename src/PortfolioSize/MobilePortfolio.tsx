import HeaderMobile from "@/SectionsMobile/HeaderMobile";
import AboutMobile from "@/SectionsMobile/AboutMobile";
import ProjectsMobile from "@/SectionsMobile/ProjectsMobile";
import ExperiencesMobile from "@/SectionsMobile/ExperiencesMobile";
import SkillsMobile from "@/SectionsMobile/SkillsMobile";
import ContactMobile from "@/SectionsMobile/Contact";

export default function MobilePortfolio() {
  return (
    <div className="w-full max-w-lg">
      <HeaderMobile />
      <AboutMobile />
      <ProjectsMobile />
      <ExperiencesMobile />
      <SkillsMobile />
      <ContactMobile />
    </div>
  );
}
