import { FC } from "react";
import { motion, useAnimation } from "framer-motion";

import useStore from "@/lib/store";

import { Badge } from "@/components/ui/badge"


type ProjectCardProps = {
    title : string;
    tags : string;
    link : string;
};

const ProjectCard: FC<ProjectCardProps> = (props) => {

    const { setIsProjectCardHovered } = useStore();
    // const controls = useAnimation();
    const controlsTopProjectCard = useAnimation();
    const controlsBottomProjectCard = useAnimation();


    const handleMouseEnter = async () => {
        setIsProjectCardHovered(true);
        // await controls.start({ opacity: 1, y: 0 });
        await controlsTopProjectCard.start({ opacity: 1, y: 0 })
        await controlsBottomProjectCard.start({ opacity: 1, y: 0 })
    };

    const handleMouseLeave = async () => {
        setIsProjectCardHovered(false);
        // await controls.start({ opacity: 0, y: -50 });
        await controlsTopProjectCard.start({ opacity: 0, y: -50 })
        await controlsBottomProjectCard.start({ opacity: 0, y: 50 })
    };

    return (
        <div className={`relative w-full h-full rounded-xl hover:rounded-none border-2 border-grey-light overflow-hidden group transition-all`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <a href={ props.link } className="w-full h-full flex-col-center-center px-4 py-4 relative">
                <motion.div className="w-full h-full flex-col-start-between py-2 px-2">
                    <motion.p animate={controlsTopProjectCard} initial={{ y: 50, opacity: 0 }} transition={{ duration: 0.1 }}>
                        <Badge variant="outline">{ props.tags }</Badge>
                    </motion.p>
                    <motion.p className="text-4xl font-semibold" animate={controlsBottomProjectCard} initial={{ y: -50, opacity: 0 }} transition={{ duration: 0.3 }}>
                        { props.title }
                    </motion.p>
                </motion.div>
            </a>
        </div>
    );
};


export default ProjectCard;
