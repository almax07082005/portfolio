import Socnet, {SocnetProps} from "@/components/socnet";

interface ContactMeProps {
    socnets: SocnetProps[];
}

export default function ContactMe(props: ContactMeProps) {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="flex space-x-4">
                {props.socnets.map((socnet, index) => (
                    <Socnet key={index} name={socnet.name} link={socnet.link} icon={socnet.icon}/>
                ))}
            </div>
        </div>
    );
}
