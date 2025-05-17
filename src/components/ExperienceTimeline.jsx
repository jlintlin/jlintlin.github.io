const experiences = [
    {
        org: "University of Central Florida",
        orgUrl: "https://www.ucf.edu",
        role: "Ph.D. in Computer Science",
        date: "Aug. 2020 - Present",
        location: "Orlando, FL",
        advisor: "Dr. David Mohaisen",
    },
    {
        org: "Emory University",
        orgUrl: "https://www.emory.edu",
        role: "Master of Science in Computer Science",
        date: "Sept. 2018 - May 2020",
        location: "Atlanta, GA",
    },
    {
        org: "Ursinus College",
        orgUrl: "https://www.ursinus.edu",
        role: "Bachelor of Science in Computer Science and Mathematics",
        date: "Aug. 2014 - May 2018",
        location: "Collegeville, PA",
        minor: "Japanese",
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="space-y-12">
            <div className="relative">
                <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in">
                    <div className="flex justify-between flex-wrap mb-3">
                        <h3 className="font-medium">
                            Ph.D. in Computer Science
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Aug. 2020 - Present</span>
                    </div>
                    <div className="flex items-center mb-3">
                        <a
                            href="https://www.ucf.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-2"
                        >
                            University of Central Florida
                        </a>
                        <span className="mx-2 text-gray-400">—</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Orlando, FL</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Advisor: Dr. David Mohaisen
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in">
                    <div className="flex justify-between flex-wrap mb-3">
                        <h3 className="font-medium">
                            Master of Science in Computer Science
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Sept. 2018 - May 2020</span>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="https://www.emory.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-2"
                        >
                            Emory University
                        </a>
                        <span className="mx-2 text-gray-400">—</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Atlanta, GA</span>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in">
                    <div className="flex justify-between flex-wrap mb-3">
                        <h3 className="font-medium">
                            Bachelor of Science in Computer Science and Mathematics
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Aug. 2014 - May 2018</span>
                    </div>
                    <div className="flex items-center mb-3">
                        <a
                            href="https://www.ursinus.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-2"
                        >
                            Ursinus College
                        </a>
                        <span className="mx-2 text-gray-400">—</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Collegeville, PA</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Minor: Japanese
                    </p>
                </div>
            </div>
        </div>
    );
} 