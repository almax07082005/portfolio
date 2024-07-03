import Project, {ProjectProps} from "@/components/project";

interface ProjectsProps {
    projects: ProjectProps[];
}

export default function Projects(props: ProjectsProps) {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="flex flex-wrap -mx-2">
                {props.projects.map((project, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <Project
                            {...project}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
