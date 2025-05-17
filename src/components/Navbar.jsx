import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#publications", label: "Publications" },
    { href: "#skills", label: "Skills" },
    { href: "#languages", label: "Languages" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${scrolled ? "backdrop-blur-md bg-background-light/70 dark:bg-background-dark/80 shadow-glass dark:shadow-glass-dark py-3"
                : "bg-transparent py-5"
            }`}>
            <div className="max-w-4xl mx-auto flex items-center justify-between px-6 md:px-10">
                <a
                    href="#"
                    className="font-light text-xl text-primary-light dark:text-primary-dark hover:opacity-80 transition-opacity"
                >
                    Jie Lin
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-foreground-light/80 dark:text-foreground-dark/80 hover:text-primary-light dark:hover:text-primary-dark hover:underline underline-offset-4 decoration-2 decoration-primary-light/50 dark:decoration-primary-dark/50 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={() => setDark(d => !d)}
                        className="ml-3 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {dark ? (
                            <SunIcon className="w-5 h-5 animate-fade-in" />
                        ) : (
                            <MoonIcon className="w-5 h-5 animate-fade-in" />
                        )}
                    </button>
                </div>

                <div className="md:hidden flex items-center space-x-1">
                    <button
                        onClick={() => setDark(d => !d)}
                        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {dark ? (
                            <SunIcon className="w-5 h-5 animate-fade-in" />
                        ) : (
                            <MoonIcon className="w-5 h-5 animate-fade-in" />
                        )}
                    </button>

                    <button
                        className="p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                        onClick={() => setOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden absolute top-full left-0 w-full px-6 py-5 glass border-t border-white/5 dark:border-white/5 animate-fade-in">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="py-2 text-foreground-light/90 dark:text-foreground-dark/90 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
} 