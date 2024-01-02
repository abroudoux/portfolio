import { FC } from "react";

import useStore from "@/lib/store";


type ProjectCardProps = {
    title: string;
    width ? : string;
    link ? : string;
};

const ProjectCard: FC<ProjectCardProps> = (props) => {

    const { setIsProjectCardHovered } = useStore();

    const handleMouseEnter = () => {
        setIsProjectCardHovered(true);
    };

    const handleMouseLeave = () => {
        setIsProjectCardHovered(false);
    };

    return (
        <div className={`relative w-2/4 h-full rounded-lg hover:rounded-none border-2 border-grey-light overflow-hidden group transition-all`}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <a href={ props.link } className="w-full h-full flex-col-center-center px-4 py-4">
                <div className="w-full h-full flex-col-center-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <p className="relative z-10">{ props.title }</p>
                </div>
            </a>
        </div>
    );
};


export default ProjectCard;
