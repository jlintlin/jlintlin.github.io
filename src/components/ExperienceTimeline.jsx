const experiences = [
    {
        org: "University of Central Florida",
        orgUrl: "https://www.ucf.edu",
        role: "Ph.D. in Computer Science",
        date: "August 2020 - Present",
        location: "Orlando, FL",
        advisor: "Dr. David Mohaisen",
        advisorUrl: "https://www.cs.ucf.edu/~mohaisen/",
    },
    {
        org: "Emory University",
        orgUrl: "https://www.emory.edu",
        role: "Master of Science in Computer Science",
        date: "September 2018 - May 2020",
        location: "Atlanta, GA",
    },
    {
        org: "Ursinus College",
        orgUrl: "https://www.ursinus.edu",
        role: "Bachelor of Science in Computer Science and Mathematics",
        date: "August 2014 - May 2018",
        location: "Collegeville, PA",
        minor: "Japanese",
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-5 bottom-0 w-0.5 bg-indigo-100 dark:bg-indigo-900/30 hidden sm:block"></div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-indigo-500 transform -translate-x-1/2 hidden sm:block"></div>

                        <div className="sm:ml-12 washi-card hover:shadow-shoji">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{exp.role}</h3>
                                <span className="date-tag mt-2 sm:mt-0 inline-block">{exp.date}</span>
                            </div>
                            <div className="mb-2">
                                <a
                                    href={exp.orgUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    {exp.org}
                                </a>
                                <span className="text-gray-600 dark:text-gray-400 ml-2 flex items-center inline-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {exp.location}
                                </span>
                            </div>
                            {exp.advisor && (
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Advisor: {exp.advisorUrl ? (
                                        <a
                                            href={exp.advisorUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
                                        >
                                            {exp.advisor}
                                        </a>
                                    ) : (
                                        exp.advisor
                                    )}
                                </p>
                            )}
                            {exp.minor && (
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Minor: {exp.minor}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 