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
        <div className="space-y-4">
            {publications.map((pub, index) => (
                <div key={index} className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-white">{pub.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                            {pub.date}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{pub.venue}</span>
                    </div>
                    <div className="text-sm mb-3 text-gray-700 dark:text-gray-300">{pub.authors}</div>
                    <div className="flex items-center">
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Read paper
                        </a>
                        <span className="ml-3 text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300">
                            {pub.type}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
} 