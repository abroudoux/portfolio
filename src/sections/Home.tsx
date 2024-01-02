import { motion } from "framer-motion";

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
			<motion.div className="w-full h-full rounded-xl flex-col-center-center backdrop-blur-sm border-2" initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
				<div className="w-full h-full flex-col-center-center max-w-5xl text-center">
					<h1 className="flex-col-center-center gap-16">
						<motion.span variants={itemVariants} className="text-6xl">Hey, 👋 I am</motion.span>
						<motion.span variants={itemVariants} className="text-8xl font-semibold">arthur</motion.span>
						<motion.span variants={itemVariants} className="text-6xl max-w-xl font-light">
							<span className="font-semibold">frontend developer</span> and <span className="font-semibold">creative coder</span>
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

