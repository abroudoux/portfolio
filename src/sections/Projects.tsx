import ProjectCard from "@/components/Projects/ProjectCard";


export default function Projects() {
    return (
        <section className="section flex-col-center-center" id="projects">
            <div className="w-full h-auto flex-row-start-between mb-4">
                <h1 className="text-6xl">projects</h1>
            </div>
            <div className="w-full h-full flex-col-center-center gap-3">
                <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
                    <ProjectCard title="test" />
                    <ProjectCard title="test" />
                </div>
                <div className="w-full h-2/4 py-1 flex-row-center-between gap-4">
                    <ProjectCard title="Wanna see more ?" link="https://github.com/abroudoux" />
                    <ProjectCard title="test" />
                </div>
            </div>
        </section>
    );
};