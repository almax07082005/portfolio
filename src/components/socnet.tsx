import {ReactNode} from "react";

export interface SocnetProps {
    name: string;
    link: string;
    icon: ReactNode;
}

export default function Socnet(props: SocnetProps) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer"
           className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            {props.icon}
            <span className="hidden sm:inline">{props.name}</span>
        </a>
    );
}
