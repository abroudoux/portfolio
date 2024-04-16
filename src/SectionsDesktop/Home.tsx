import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import useStore from "@/lib/store";
import { itemVariants, letterVariants } from "@/lib/animations";

import "@/style/animated-bg.scss";

export default function Home() {
  return (
    <section className="section flex-col-center-center relative" id="home">
      <motion.div
        className="w-full h-full rounded-xl flex-col-center-center backdrop-blur-sm border-2 z-10"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
        <div className="w-full h-full flex-col-center-center text-center">
          <BackgroundGradientAnimation />
          <h1 className="flex-col-center-center sm:gap-0 lg:gap-2 font-normal lg:text-6xl flex-col-center-center tracking-wide z-20">
            <motion.span variants={itemVariants}>
              Hey{" "}
              <motion.span variants={itemVariants} whileHover={{ rotate: 45 }}>
                👋
              </motion.span>{" "}
              I am
            </motion.span>
            <div className="flex-row-center-center">
              <motion.span
                variants={letterVariants}
                whileHover={{ y: -30 }}
                className="lg:text-9xl font-semibold my-6 lg:my-12">
                a
              </motion.span>
              <motion.span
                variants={letterVariants}
                whileHover={{ y: -30 }}
                className="lg:text-9xl font-semibold my-6 lg:my-12">
                r
              </motion.span>
              <motion.span
                variants={letterVariants}
                whileHover={{ y: -30 }}
                className="lg:text-9xl font-semibold my-6 lg:my-12">
                t
              </motion.span>
              <motion.span
                variants={letterVariants}
                whileHover={{ y: -30 }}
                className="lg:text-9xl font-semibold my-6 lg:my-12">
                h
              </motion.span>
              <motion.span
                variants={letterVariants}
                whileHover={{ y: -30 }}
                className="lg:text-9xl font-semibold my-6 lg:my-12">
                u
              </motion.span>
              <motion.span
                variants={letterVariants}
                whileHover={{ y: -30 }}
                className="lg:text-9xl font-semibold my-6 lg:my-12">
                r
              </motion.span>
            </div>
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
        <div className="w-full h-auto flex-row-center-between px-12 py-10 text-2xl z-20">
          <motion.p variants={itemVariants}>2024</motion.p>
          <motion.p variants={itemVariants}>angers, france</motion.p>
        </div>
      </motion.div>
    </section>
  );
}
