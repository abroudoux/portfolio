import ProjectCard from "@/components/Projects/ProjectCard";


export default function Projects() {
    return (
        <section className="section flex-col-center-center" id="projects">
            <div className="w-full h-auto flex-row-start-between mb-4">
                <h1 className="text-6xl">projects</h1>
            </div>
            <div className="w-full h-full flex-col-center-center gap-3">
                <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
                    <ProjectCard width="3/4" title="test" />
                    <ProjectCard width="1/4" title="test" />
                </div>
                <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
                    <ProjectCard width="1/4" title="Wanna see more ?" link="https://github.com/abroudoux" />
                    <ProjectCard width="3/4" title="test" />
                </div>
            </div>
        </section>
    );
};