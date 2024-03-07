import { Github, Linkedin, Mail, CircleUser } from "lucide-react";
import { motion } from "framer-motion";

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
import laravel from "@/assets/logos/laravel.svg";
import cv from "@/assets/CV.pdf";

export default function About() {
  return (
    <section className="section flex-col-center-center" id="about">
      <motion.div className="w-full h-full border-2 flex-row-center-between rounded-lg">
        <div className="h-full w-1/2 rounded-s-xl flex-col-end-start py-24 pl-40 gap-4">
          <div className="flex-col-start-center w-full h-auto mb-16">
            <h2 className="font-semibold text-7xl">Arthur Broudoux</h2>
          </div>
          <div className="flex-col-start-start w-ful h-auto mb-12 text-xl">
            <p className="pr-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolore? Aut eaque
              accusamus autem blanditiis culpa quidem sed odio alias? Labore quae nulla totam
              necessitatibus recusandae placeat molestiae sit magni iste illo, id saepe tenetur
              explicabo sint reiciendis nemo tempora!
            </p>
          </div>
          <div className="w-full h-auto mt-4 mb-20">
            <h2 className="text-4xl font-semibold py-6">Contact</h2>
            <ul className="flex flex-col justify-center gap-2 text-xl">
              <li>
                <a
                  href="https://github.com/abroudoux"
                  className="flex flex-row items-center gap-2"
                  target="_blank">
                  <Github />
                  abroudoux
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abroudoux"
                  className="flex flex-row items-center gap-2"
                  target="_blank">
                  <Linkedin />
                  abroudoux
                </a>
              </li>
              <li>
                <a
                  href="mailto:arthur.broudoux@gmail.com"
                  className="flex flex-row items-center gap-2"
                  target="_blank">
                  <Mail />
                  arthur.broudoux@gmail.com
                </a>
              </li>
              <li>
                <a href={cv} className="flex flex-row items-center gap-2" target="_blank">
                  <CircleUser />
                  Curiculum Vitae
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-1/4 flex-col-start-center">
            <div className="grid grid-cols-8 gap-4">
              <img
                src={javascript}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-javascript"
              />
              <img
                src={typescript}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-typescript"
              />
              <img src={scss} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-scss" />
              <img src={react} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-react" />
              <img
                src={tailwind}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-tailwindcss"
              />
              <img src={nestjs} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-nestjs" />
              <img src={git} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-git" />
              <img src={bash} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-bash" />
              <img src={nodejs} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-nodejs" />
              <img
                src={mongodb}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-mongodb"
              />
              <img src={rust} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-rust" />
              <img src={python} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-python" />
              <img
                src={postman}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-postman"
              />
              <img src={docker} className="w-16 h-16 bg-white/5 p-3 rounded-lg" alt="logo-docker" />
              <img
                src={postgresql}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-postgresql"
              />
              <img
                src={laravel}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-laravel"
              />
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 rounded-e-xl flex-col-start-start py-24 px-20">
          <div className="w-full h-full flex-col-start-start mb-4">
            <h2 className="text-4xl font-semibold mb-8 italic">Professional Experiences</h2>
            <ExperienceCard
              post="Internship web developper"
              name="Coquille Consulting"
              date="2023 - now"
              description="As a web developer intern, I am in charge of the development of the company's websites. I'm in charge of the creation of the different themes and the development of the back-end part of the websites. I also work on the company's internal tools."
              technos={["Symfony", "JavaSript", "SCSS"]}
            />
            <ExperienceCard
              post="Internship web developper"
              name="Krakn Behavioural"
              date="2023"
              description="My role as a web developper intern was to develop the company's website. I was also in charge of the development of a specific website for the company which was used for the company's internal use during meetings and presentations."
              technos={["React", "SCSS", "TypeScript"]}
            />
          </div>
          <div className="w-full h-full flex-col-start-start">
            <h2 className="text-4xl font-semibold mb-8 italic">Education</h2>
            <ExperienceCard
              post="B2 - Web Developper"
              name="My Digital School Angers - Web and Multimedia cycle"
              date="2022 - now"
              description="I am currently in my second year of the web and multimedia cycle at My Digital School in Angers. I am learning the different web development languages and tools such as HTML, CSS, JavaScript, PHP and also the use of different tools like Figma, Photoshop or Illustrator."
              technos={["Web Development", "UI/UX", "Webdesign", "Graphic Design"]}
            />
            <ExperienceCard
              post="High School Student"
              name="Lycée Bellevue - Le Mans"
              date="2019 - 2022"
              description="Admitted well mention"
              technos={["English", "SES", "Mathematics"]}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
