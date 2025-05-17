const experiences = [
    {
        org: "University of Central Florida",
        orgUrl: "https://www.ucf.edu",
        role: "Ph.D. in Computer Science",
        date: "August 2020 - Present",
        location: "Orlando, FL",
        advisor: "Dr. David Mohaisen",
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
        <div className="space-y-4">
            {experiences.map((exp, index) => (
                <div key={index} className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{exp.role}</h3>
                        <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full mt-2 md:mt-0">{exp.date}</span>
                    </div>
                    <div className="mb-2">
                        <a
                            href={exp.orgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            {exp.org}
                        </a>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">• {exp.location}</span>
                    </div>
                    {exp.advisor && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            Advisor: {exp.advisor}
                        </p>
                    )}
                    {exp.minor && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                            Minor: {exp.minor}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
} 