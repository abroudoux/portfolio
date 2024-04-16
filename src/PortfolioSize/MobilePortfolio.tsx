import HeaderMobile from "@/SectionsMobile/HeaderMobile";
import AboutMobile from "@/SectionsMobile/AboutMobile";
import ProjectsMobile from "@/SectionsMobile/ProjectsMobile";
import ExperiencesMobile from "@/SectionsMobile/ExperiencesMobile";
import SkillsMobile from "@/SectionsMobile/SkillsMobile";

export default function MobilePortfolio() {
  return (
    <div className="w-full">
      <HeaderMobile />
      <AboutMobile />
      <ProjectsMobile />
      <ExperiencesMobile />
      <SkillsMobile />
    </div>
  );
}
