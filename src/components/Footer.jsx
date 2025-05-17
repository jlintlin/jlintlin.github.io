export default function Footer() {
    return (
        <footer className="relative py-12 px-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <div className="h-0.5 w-16 bg-primary-light/20 dark:bg-primary-dark/20"></div>
                </div>
                <p className="font-light">
                    © {new Date().getFullYear()} Jie Lin. All rights reserved.
                </p>
                <p className="mt-2 text-xs opacity-75">
                    Designed with a Japanese-inspired aesthetic
                </p>
            </div>
        </footer>
    );
} 