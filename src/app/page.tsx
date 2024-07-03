import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact-me";
import {FaGithub, FaMailBulk, FaTelegram} from 'react-icons/fa';

export default function Home() {
    return (
        <div>
            <AboutMe image={"/me.jpg"} image_width={2928} image_height={3904}>
                <p>
                    Hi there! I am Maksim Al Dandan, a dedicated and enthusiastic student at Innopolis University, where
                    I am honing my skills and knowledge in the field of software development. I am currently immersed in
                    learning Java backend development as well as exploring the fascinating world of Solidity and
                    Blockchain technologies.
                </p><br/>
                <p>
                    My passion lies in creating innovative and impactful software projects that can make a difference in
                    the world. I believe in the power of technology to solve real-world problems and am constantly
                    looking for opportunities to apply my skills in meaningful ways.
                </p><br/>
                <p>
                    I am always eager to collaborate with like-minded individuals and am currently seeking a team for
                    hackathons or collaborative projects. If you are looking for a motivated and skilled team member who
                    is ready to tackle challenges and create amazing software, let us connect!
                </p><br/>
                <p>
                    Feel free to reach out to me with the contacts provided in the Contact Me section. Let us make
                    something great together!
                </p>
            </AboutMe>
            <Projects projects={[
                {
                    name: "Cardio Telegram Bot",
                    description: "Telegram bot for promotion information about cardiology",
                    link: "https://github.com/almax07082005/cardioTelegramBot",
                    image: "/cardio-bot.jpeg",
                    image_width: 1024,
                    image_height: 1024
                },
                {
                    name: "Innoboard",
                    description: "Web service for hosting projects and finding a suitable team inside Innopolis University",
                    link: "https://github.com/almax07082005/cardioTelegramBot",
                    image: "/innoboard.jpeg",
                    image_width: 1024,
                    image_height: 1024
                },
                {
                    name: "Restaurant",
                    description: "Restaurant website with a menu and a cart",
                    link: "https://github.com/orgs/iu-restaurant-app/repositories",
                    image: "/restaurant-app.jpeg",
                    image_width: 1024,
                    image_height: 1024
                }
            ]}/>
            <ContactMe socnets={[
                {
                    name: "GitHub",
                    link: "https://github.com/almax07082005",
                    icon: <FaGithub size={24}/>
                },
                {
                    name: "Telegram",
                    link: "https://t.me/almax_good",
                    icon: <FaTelegram size={24}/>
                },
                {
                    name: "Email",
                    link: "mailto:m.aldandan@innopolis.university",
                    icon: <FaMailBulk size={24}/>
                }
            ]}/>
        </div>
    );
}
