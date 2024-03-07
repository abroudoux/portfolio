import { Github, Linkedin, Mail, CircleUser, icons } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

import { itemVariants, iconsVariants } from "@/lib/animations";

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
  const scrollRef = useRef(null);
  return (
    <section className="section flex-col-center-center" id="about">
      <motion.div
        className="w-full h-full border-2 flex-row-center-between rounded-lg"
        initial="hidden"
        whileInView="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        viewport={{ once: true }}
        ref={scrollRef}
        style={{ overflow: "scroll" }}>
        <motion.div className="h-full w-1/2 rounded-s-xl flex-col-end-start py-24 pl-40 gap-4">
          <div className="flex-col-start-center w-full h-auto mb-16">
            <motion.h2 className="font-semibold text-7xl" variants={itemVariants}>
              Arthur Broudoux
            </motion.h2>
          </div>
          <div className="flex-col-start-start w-ful h-auto mb-12 text-xl">
            <motion.p className="pr-6" variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolore? Aut eaque
              accusamus autem blanditiis culpa quidem sed odio alias? Labore quae nulla totam
              necessitatibus recusandae placeat molestiae sit magni iste illo, id saepe tenetur
              explicabo sint reiciendis nemo tempora!
            </motion.p>
          </div>
          <div className="w-full h-auto mt-4 mb-20">
            <motion.h2 className="text-4xl font-semibold py-6" variants={itemVariants}>
              Contact
            </motion.h2>
            <motion.ul
              className="flex flex-col justify-center gap-2 text-xl"
              initial="hidden"
              whileInView="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              viewport={{ once: true }}
              ref={scrollRef}
              style={{ overflow: "scroll" }}>
              <motion.li variants={itemVariants}>
                <a
                  href="https://github.com/abroudoux"
                  className="flex flex-row items-center gap-2"
                  target="_blank">
                  <Github />
                  abroudoux
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://linkedin.com/in/abroudoux"
                  className="flex flex-row items-center gap-2"
                  target="_blank">
                  <Linkedin />
                  abroudoux
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="mailto:arthur.broudoux@gmail.com"
                  className="flex flex-row items-center gap-2"
                  target="_blank">
                  <Mail />
                  arthur.broudoux@gmail.com
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href={cv} className="flex flex-row items-center gap-2" target="_blank">
                  <CircleUser />
                  Curiculum Vitae
                </a>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div
            className="w-full h-1/4 flex-col-start-center"
            initial="hidden"
            whileInView="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            viewport={{ once: true }}
            ref={scrollRef}
            style={{ overflow: "scroll" }}>
            <div className="grid grid-cols-8 gap-4">
              <motion.img
                variants={iconsVariants}
                src={javascript}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-javascript"
              />
              <motion.img
                variants={iconsVariants}
                src={typescript}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-typescript"
              />
              <motion.img
                variants={iconsVariants}
                src={scss}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-scss"
              />
              <motion.img
                variants={iconsVariants}
                src={react}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-react"
              />
              <motion.img
                variants={iconsVariants}
                src={tailwind}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-tailwindcss"
              />
              <motion.img
                variants={iconsVariants}
                src={nestjs}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-nestjs"
              />
              <motion.img
                variants={iconsVariants}
                src={git}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-git"
              />
              <motion.img
                variants={iconsVariants}
                src={bash}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-bash"
              />
              <motion.img
                variants={iconsVariants}
                src={nodejs}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-nodejs"
              />
              <motion.img
                variants={iconsVariants}
                src={mongodb}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-mongodb"
              />
              <motion.img
                variants={iconsVariants}
                src={rust}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-rust"
              />
              <motion.img
                variants={iconsVariants}
                src={python}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-python"
              />
              <motion.img
                variants={iconsVariants}
                src={postman}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-postman"
              />
              <motion.img
                variants={iconsVariants}
                src={docker}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-docker"
              />
              <motion.img
                variants={iconsVariants}
                src={postgresql}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-postgresql"
              />
              <motion.img
                variants={iconsVariants}
                src={laravel}
                className="w-16 h-16 bg-white/5 p-3 rounded-lg"
                alt="logo-laravel"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="h-full w-1/2 rounded-e-xl flex-col-start-start py-24 px-20">
          <motion.div className="w-full h-full flex-col-start-start mb-4" variants={itemVariants}>
            <motion.h2 className="text-4xl font-semibold mb-8 italic" variants={itemVariants}>
              Professional Experiences
            </motion.h2>
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
          </motion.div>
          <motion.div className="w-full h-full flex-col-start-start" variants={itemVariants}>
            <motion.h2 className="text-4xl font-semibold mb-8 italic" variants={itemVariants}>
              Education
            </motion.h2>
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
