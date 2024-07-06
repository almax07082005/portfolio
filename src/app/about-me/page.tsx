import AboutMe from '@/components/about-me';

export default function Home() {
    return (
        <AboutMe image={'/me.jpg'} image_width={2928} image_height={3904}>
            <p>
                Hi there! I am Maksim Al Dandan, a dedicated and enthusiastic student at Innopolis University, where
                I am honing my skills and knowledge in the field of software development. I am currently immersed in
                learning Java backend development as well as exploring the fascinating world of Solidity and
                Blockchain technologies.
            </p><br />
            <p>
                My passion lies in creating innovative and impactful software projects that can make a difference in
                the world. I believe in the power of technology to solve real-world problems and am constantly
                looking for opportunities to apply my skills in meaningful ways.
            </p><br />
            <p>
                I am always eager to collaborate with like-minded individuals and am currently seeking a team for
                hackathons or collaborative projects. If you are looking for a motivated and skilled team member who
                is ready to tackle challenges and create amazing software, let us connect!
            </p><br />
            <p>
                Feel free to reach out to me with the contacts provided in the Contact Me section. Let us make
                something great together!
            </p>
        </AboutMe>
    );
}
