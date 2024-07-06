import ContactMe from '@/components/contact-me';
import { FaGithub, FaMailBulk, FaTelegram } from 'react-icons/fa';

export default function Home() {
    return (
        <ContactMe socnets={[
            {
                name: 'GitHub',
                link: 'https://github.com/almax07082005',
                icon: <FaGithub size={24} />,
            },
            {
                name: 'Telegram',
                link: 'https://t.me/almax_good',
                icon: <FaTelegram size={24} />,
            },
            {
                name: 'Email',
                link: 'mailto:m.aldandan@innopolis.university',
                icon: <FaMailBulk size={24} />,
            },
        ]} />
    );
}
