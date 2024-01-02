import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

import useStore from "@/lib/store";

import { itemVariants } from "@/lib/animations";
import "@/style/animated-bg.scss";


export default function Home() {

	const { setIsTextHovered } = useStore();

    const handleMouseEnter = () => {
        setIsTextHovered(true);
    };

    const handleMouseLeave = () => {
        setIsTextHovered(false);
    };

	return (
		<section className="section flex-col-center-center relative" id="home">
			<motion.div className="w-full h-full rounded-xl flex-col-center-center backdrop-blur-sm border-2 z-10" initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
				<div className="w-full h-full flex-col-center-center text-center">
					<h1 className="flex-col-center-center gap-12 font-normal text-5xl flex-col-center-center">
						<motion.span variants={itemVariants}>Hey, 👋 I am</motion.span>
						<motion.span variants={itemVariants} className="text-9xl font-semibold my-4">arthur</motion.span>
						<motion.span variants={itemVariants} className="max-w-2xl flex-row-center-center hover:italic transition-all group">
							<Asterisk className="w-12 h-12 group-hover:animate-spin" />
							web developer
							<Asterisk className="w-12 h-12 group-hover:animate-spin" />
						</motion.span>
						<motion.span variants={itemVariants} className="inline">
							and <span className="border-2 border-white rounded-3xl px-3 py-1 transition-all hover:rounded-lg">creative coder</span>
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
};

