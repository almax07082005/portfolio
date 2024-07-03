import Image from "next/image";

export interface ProjectProps {
    name: string;
    description: string;
    link: string;
    image: string;
    image_width: number;
    image_height: number;
}

export default function Project(props: ProjectProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-2">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full"
                     style={{paddingBottom: `${(props.image_height / props.image_width) * 100}%`}}>
                    <Image
                        src={props.image}
                        alt={props.name}
                        width={props.image_width}
                        height={props.image_height}
                        className="absolute top-0 left-0 w-full h-full object-contain rounded-t-lg"
                    />
                </div>
            </a>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{props.name}</h3>
                <p className="text-gray-700">{props.description}</p><br/>
            </div>
        </div>
    );
}
