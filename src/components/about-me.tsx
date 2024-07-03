import Image from "next/image";
import React, {ReactNode} from "react";

interface AboutMeProps {
    children: ReactNode;
    image: string;
    image_width: number;
    image_height: number;
}

export default function AboutMe(props: AboutMeProps) {
    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
                <Image
                    src={props.image}
                    width={props.image_width}
                    height={props.image_height}
                    alt="Maksim Al Dandan"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
            </div>
            <div className="md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <div className="text-gray-700 mb-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}