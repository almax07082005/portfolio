import InputForm from '@/components/input-form';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-2 bg-gray-50">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold">
                    Welcome to my form!
                </h1>
                <InputForm />
            </main>
        </div>
    );
}
