import { motion } from "framer-motion";

import useStore from "@/lib/store";

import "@/style/animated-bg.scss";


const itemVariants = {
  	hidden: { opacity: 0, y: 10 },
  	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


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
			<div className="w-full h-full rounded-lg flex-col-center-center backdrop-blur-sm border-2">
				<motion.div className="w-full h-full flex-col-center-center max-w-5xl text-center" initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
					<h1 className="flex-col-center-center gap-16">
						<motion.span variants={itemVariants} className="text-6xl">Hey, 👋 I am</motion.span>
						<motion.span variants={itemVariants} className="text-8xl font-semibold">arthur</motion.span>
						<motion.span variants={itemVariants} className="text-6xl max-w-xl font-light">
							<span className="font-semibold">frontend developer</span> and <span className="font-semibold">creative coder</span>
						</motion.span>
					</h1>
				</motion.div>
				<motion.div className="w-full h-auto flex-row-center-between px-12 py-10 text-2xl" initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
					<motion.p variants={itemVariants}>2024</motion.p>
					<motion.p variants={itemVariants}>angers, france</motion.p>
				</motion.div>
			</div>

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

