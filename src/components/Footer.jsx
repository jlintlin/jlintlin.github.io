import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200/30 dark:border-gray-800/30 py-8 mt-16 bg-shoji">
            <div className="container-jp text-center">
                <div className="inline-block mb-4">
                    <svg className="h-6 w-auto mx-auto mb-2 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L20 20H4L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="jp-divider w-24 mx-auto"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-wide font-light">
                    © {new Date().getFullYear()} Jie Lin • All rights reserved
                </p>
            </div>
        </footer>
    );
} 