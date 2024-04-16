import HeaderMobile from "@/components/Mobile/HeaderMobile";
import AboutMobile from "@/components/Mobile/AboutMobile";
import ProjectsMobile from "@/components/Mobile/ProjectsMobile";
import ExperiencesMobile from "@/components/Mobile/ExperiencesMobile";
import SkillsMobile from "@/components/Mobile/SkillsMobile";

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
