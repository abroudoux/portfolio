import { FC } from "react";
import { motion, useAnimation } from "framer-motion";

import useStore from "@/lib/store";

import { Badge } from "@/components/ui/badge";


type ProjectCardProps = {
    title : string;
    tags : string[];
    link : string;
    image ? : string;
    size ? : string;
};

const ProjectCard: FC<ProjectCardProps> = (props) => {

    const { setIsProjectCardHovered } = useStore();
    const controlsTopProjectCard = useAnimation();
    const controlsBottomProjectCard = useAnimation();


    const handleMouseEnter = async () => {
        setIsProjectCardHovered(true);
        await controlsTopProjectCard.start({ opacity: 1, y: 0 })
        await controlsBottomProjectCard.start({ opacity: 1, y: 0 })
    };

    const handleMouseLeave = async () => {
        setIsProjectCardHovered(false);
        await controlsTopProjectCard.start({ opacity: 0, y: -50 })
        await controlsBottomProjectCard.start({ opacity: 0, y: 50 })
    };

    return (
        <div className={`relative w-full h-full rounded-xl hover:rounded-none border-2 border-grey-light overflow-hidden group transition-all`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity z-10"></div>
            <a href={ props.link } className="w-full h-full flex-col-center-center relative">
                <div className="w-full h-full flex-col-center-center">
                    <img src={ props.image } alt="" className={`${props.size === 'xs' ? 'w-36 h-auto ' : 'w-full h-auto bg-cover'}`} />
                </div>
                <motion.div className="w-full h-full flex-col-start-between absolute py-4 px-4 z-20">
                    <motion.p animate={controlsTopProjectCard} initial={{ y: 50, opacity: 0 }} transition={{ duration: 0.1 }}>
                        {props.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">{ tag }</Badge>
                        ))}
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
