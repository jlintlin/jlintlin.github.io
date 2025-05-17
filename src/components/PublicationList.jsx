import React from "react";

const pubs = [
    {
        title: "From Large to Mammoth: A Comparative Evaluation of Large Language Models in Vulnerability Detection",
        venue: "NDSS 2025, San Diego, CA – Feb 24–28, 2025",
        authors: "Jie Lin and David Mohaisen",
        link: "https://doi.org/10.14722/ndss.2025.241491",
        type: "Conference",
    },
    {
        title: "Evaluating Large Language Models in Vulnerability Detection Under Variable Context Windows",
        venue: "ICMLA 2024, Miami, FL – Dec 18–22, 2024",
        authors: "Jie Lin and David Mohaisen",
        link: "https://arxiv.org/abs/2502.00064",
        type: "Conference",
    },
    {
        title: "Entangled Clouds: Measuring the Hosting Infrastructure of the Free Contents Web",
        venue: "CCSW, ACM CCS 2023 – Copenhagen, Denmark",
        authors: "Mohamed Alqadhi, Mohammed Alkinoon, Jie Lin, Ahmed Abdalaal, David Mohaisen",
        link: "https://doi.org/10.1145/3605763.3625274",
        type: "Workshop",
    },
];

export default function PublicationList({ publications }) {
    return (
        <div className="space-y-6">
            {publications.map((pub, index) => (
                <div key={index} className="washi-card hover:shadow-shoji">
                    <h3 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">{pub.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="date-tag">
                            {pub.date}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {pub.venue}
                        </span>
                    </div>
                    <div className="text-sm mb-4 text-gray-700 dark:text-gray-300 flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{pub.authors}</span>
                    </div>
                    <div className="jp-divider my-3"></div>
                    <div className="flex items-center">
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm flex items-center group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Read paper
                        </a>
                        <span className="ml-3 text-xs bg-indigo-50 dark:bg-indigo-900/30 rounded-full px-2 py-1 text-indigo-700 dark:text-indigo-300">
                            {pub.type}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
} 