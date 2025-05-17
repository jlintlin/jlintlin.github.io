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

export default function PublicationList() {
    return (
        <div className="space-y-8">
            {pubs.map((pub, i) => (
                <div
                    key={i}
                    className="glass p-6 rounded-lg border-l-2 border-primary-light/40 dark:border-primary-dark/40 shadow-glass dark:shadow-glass-dark transition-all duration-400 hover:translate-x-1 group"
                >
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-foreground-light dark:text-foreground-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                            {pub.title}
                        </h3>
                        <span className="ml-3 shrink-0 text-xs rounded-full px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark">
                            {pub.type}
                        </span>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">{pub.venue}</div>
                    <div className="text-sm mb-4">{pub.authors}</div>
                    <div className="flex items-center">
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-2 text-sm"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Read paper
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
} 