import React, { useState } from "react";

export default function Navbar({ dark, setDark }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-xl font-medium text-gray-900 dark:text-white">
                        Jie Lin
                    </a>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center">
                        <div className="flex space-x-4 mr-6">
                            <a
                                href="#education"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-2 py-1 text-sm font-medium"
                            >
                                Education
                            </a>
                            <a
                                href="#experience"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-2 py-1 text-sm font-medium"
                            >
                                Experience
                            </a>
                            <a
                                href="#publications"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-2 py-1 text-sm font-medium"
                            >
                                Publications
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-2 py-1 text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>

                        <button
                            onClick={() => setDark(!dark)}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 focus:outline-none"
                            aria-label="Toggle dark mode"
                        >
                            {dark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setDark(!dark)}
                            className="mr-2 p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 focus:outline-none"
                            aria-label="Toggle dark mode"
                        >
                            {dark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 focus:outline-none"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#education"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                        >
                            Education
                        </a>
                        <a
                            href="#experience"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                        >
                            Experience
                        </a>
                        <a
                            href="#publications"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                        >
                            Publications
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
} 