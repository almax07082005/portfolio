import Projects from '@/components/projects';

export default function Home() {
    return (
        <Projects projects={[
            {
                name: 'Cardio Telegram Bot',
                description: 'Telegram bot for promotion information about cardiology',
                link: 'https://github.com/almax07082005/cardioTelegramBot',
                image: '/cardio-bot.jpeg',
                image_width: 1024,
                image_height: 1024,
            },
            {
                name: 'Innoboard',
                description: 'Web service for hosting projects and finding a suitable team inside Innopolis University',
                link: 'https://github.com/almax07082005/cardioTelegramBot',
                image: '/innoboard.jpeg',
                image_width: 1024,
                image_height: 1024,
            },
            {
                name: 'Restaurant',
                description: 'Restaurant website with a menu and a cart',
                link: 'https://github.com/orgs/iu-restaurant-app/repositories',
                image: '/restaurant-app.jpeg',
                image_width: 1024,
                image_height: 1024,
            },
        ]} />
    );
}
