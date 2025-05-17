import React from "react";

export default function Contact() {
    const contacts = [
        {
            name: "Email",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            href: "mailto:Jie.Lin@ucf.edu"
        },
        {
            name: "LinkedIn",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            href: "https://linkedin.com/in/jie-lin-681421129/"
        },
        {
            name: "GitHub",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            href: "https://github.com/jlintlin"
        },
        {
            name: "Google Scholar",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.328 2.002v9.2q0 .51-.47.95-.47.45-1 .45-.54 0-.97-.45-.48-.45-.48-.95v-9.2h-6.16q-.91 0-1.69.69-.77.68-.77 1.6v7.36q0 .92.77 1.6.78.69 1.69.69h7.16q.91 0 1.69-.69.78-.68.78-1.6v-13.16q0-.91-.78-1.6-.78-.68-1.69-.68h-18.62q-.91 0-1.69.68-.77.69-.77 1.6v18.61q0 .92.77 1.61t1.69.69h18.62q.91 0 1.69-.69.78-.69.78-1.61v-3.39q0-.5.47-.95t1-.45q.54 0 1.01.45.47.45.47.95v3.39q0 2-1.39 3.38-1.39 1.39-3.35 1.39h-18.62q-1.96 0-3.35-1.39-1.39-1.38-1.39-3.38v-18.61q0-1.96 1.39-3.35 1.39-1.39 3.35-1.39h18.62q1.96 0 3.35 1.39 1.39 1.39 1.39 3.35z" stroke="none" />
                    <path d="M10.46 9.95l2.42 1.98q-3.98.26-3.98 3.13 0 1.4.87 2.36.86.96 2.31.96 1.39 0 2.37-.87.98-.86.98-2.16 0-1.2-1.14-2.44-1.15-1.24-3.74-3.88-.14-.14-.09-.28.04-.15.22-.15h6.47q.91 0 1.69-.68.77-.69.77-1.6v-.2q0-.91-.77-1.6-.78-.68-1.69-.68h-7.16q-.91 0-1.68.68-.78.69-.78 1.6v.2q0 .91.78 1.6.77.68 1.68.68h.09v.13q0 .32.25.58z" stroke="none" />
                </svg>
            ),
            href: "https://scholar.google.com/citations?user=Zq_Jr-4AAAAJ&hl=en"
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
                <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                    <div className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                        {contact.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {contact.name}
                    </span>
                </a>
            ))}
        </div>
    );
} 