import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

import useStore from "@/lib/store";
import { itemVariants } from "@/lib/animations";

import "@/style/animated-bg.scss";

export default function Home() {
  const { setIsTextHovered } = useStore();
  return (
    <section className="section flex-col-center-center relative" id="home">
      <motion.div
        className="w-full h-full sm:rounded-none lg:rounded-xl flex-col-center-center backdrop-blur-sm border-2 z-10"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
        <div className="w-full h-full flex-col-center-center text-center">
          <h1 className="flex-col-center-center sm:gap-0 lg:gap-2 font-normal text-3xl lg:text-5xl flex-col-center-center tracking-wide">
            <motion.span variants={itemVariants}>Hey 👋 I am</motion.span>
            <motion.span
              variants={itemVariants}
              className="lg:text-9xl sm:text-5xl font-semibold my-6 lg:my-12">
              arthur
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="flex-row-center-center hover:italic transition-all group mb-10">
              <Asterisk className="w-12 h-12 group-hover:animate-spin" />
              web developer
              <Asterisk className="w-12 h-12 group-hover:animate-spin" />
            </motion.span>
            <motion.span variants={itemVariants} className="inline">
              and{" "}
              <span className="border-[2px] border-white rounded-3xl px-2 py-2 transition-all hover:rounded-lg">
                creative coder
              </span>
            </motion.span>
          </h1>
        </div>
        <div className="w-full h-auto flex-row-center-between px-12 py-10 text-2xl">
          <motion.p variants={itemVariants}>2024</motion.p>
          <motion.p variants={itemVariants}>angers, france</motion.p>
        </div>
      </motion.div>

      <div className="blob-c">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
        <div className="shape-blob three"></div>
        <div className="shape-blob four"></div>
        <div className="shape-blob five"></div>
        <div className="shape-blob six"></div>
      </div>
    </section>
  );
}
