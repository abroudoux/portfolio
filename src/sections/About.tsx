import ExperienceCard from "@/components/Jobs/ExperienceCard";
import javascript from "@/assets/logos/javascript.svg";
import typescript from "@/assets/logos/typescript.svg";
import scss from "@/assets/logos/scss.svg";
import react from "@/assets/logos/react.svg";
import tailwind from "@/assets/logos/tailwind.svg";
import nestjs from "@/assets/logos/nestjs.svg";
import git from "@/assets/logos/git.svg";
import bash from "@/assets/logos/bash.svg";
import nodejs from "@/assets/logos/nodejs.svg";
import mongodb from "@/assets/logos/mongodb.svg";
import rust from "@/assets/logos/rust.svg";
import python from "@/assets/logos/python.svg";
import postman from "@/assets/logos/postman.svg";
import docker from "@/assets/logos/docker.svg";
import postgresql from "@/assets/logos/postgresql.svg";
import symfony from "@/assets/logos/symfony.svg";

export default function About() {
  return (
    <section className="section flex-col-center-center" id="about">
      <div className="w-full h-full border-2 flex-row-center-between rounded-lg">
        <div className="h-full w-1/2 rounded-s-xl flex-col-end-start py-36 pl-40 gap-4">
          <div className="flex-col-start-center w-full h-auto mb-24">
            <h2 className="font-semibold text-7xl">Arthur Broudoux</h2>
          </div>
          <div className="w-full h-1/4 flex-col-start-center">
            <div className="grid grid-cols-8 gap-4">
              <img src={javascript} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={typescript} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={scss} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={react} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={tailwind} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={nestjs} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={git} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={bash} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={nodejs} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={mongodb} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={rust} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={python} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={postman} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={docker} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={postgresql} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
              <img src={symfony} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="" />
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 rounded-e-xl flex-col-start-start py-40 px-20">
          <ExperienceCard
            post="Internship web developper"
            name="Coquille"
            date="2023 - présent"
            description="Lorem30
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem30
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem30
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            technos={["Symfony", "VueJs", "SCSS", "PHP"]}
          />
          <ExperienceCard
            post="Internship web developper"
            name="Krakn Behavioural"
            date="2023"
            description="Lorem30
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem30
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem30
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            technos={["React", "SCSS", "TypeScript"]}
          />
        </div>
      </div>
    </section>
  );
}
