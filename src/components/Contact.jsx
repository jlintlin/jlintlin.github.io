import { useState } from "react";

export default function Contact() {
    const [revealed, setRevealed] = useState(false);
    const user = "Jie.Lin";
    const domain = "ucf.edu";
    const handleReveal = () => setRevealed(true);

    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                    {!revealed ? (
                        <button
                            onClick={handleReveal}
                            className="px-6 py-3 rounded-md bg-primary-light/10 hover:bg-primary-light/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 text-primary-light dark:text-primary-dark transition-colors"
                        >
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Reveal Email Address
                            </span>
                        </button>
                    ) : (
                        <div className="animate-fade-in">
                            <a
                                href={`mailto:${user}@${domain}`}
                                className="text-lg text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-4"
                                rel="nofollow"
                            >
                                {user}@{domain}
                            </a>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                Email address is protected from spam bots
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                <a
                    href="https://linkedin.com/in/jie-lin-681421129/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 rounded-md bg-background-light/50 dark:bg-background-dark/50 hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors text-primary-light dark:text-primary-dark"
                >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                </a>
            </div>
        </div>
    );
} 