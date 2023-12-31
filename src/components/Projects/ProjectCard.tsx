import { FC } from "react";


type ProjectCardProps = {
    width: string;
    title: string;
    link ? : string;
};

const ProjectCard: FC<ProjectCardProps> = (props) => {
    return (
        <div className={`relative w-${props.width} h-full rounded-lg hover:rounded-none border-2 border-grey-light overflow-hidden group transition-all`}>
            {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div> */}
            <a href={ props.link } className="w-full h-full flex-col-center-center">
                <p className="relative z-10">{props.title}</p>
            </a>
        </div>
    );
};


export default ProjectCard;
