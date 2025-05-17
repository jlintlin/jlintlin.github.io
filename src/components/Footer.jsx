import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                <p>
                    © {new Date().getFullYear()} Jie Lin. All rights reserved.
                </p>
            </div>
        </footer>
    );
} 