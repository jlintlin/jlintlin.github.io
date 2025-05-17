import React, { useState, useEffect } from "react";
import ExperienceTimeline from "./components/ExperienceTimeline";
import PublicationList from "./components/PublicationList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "University of Central Florida",
      companyUrl: "https://www.ucf.edu",
      location: "Orlando, FL",
      date: "August 2021 - Present",
    },
    {
      title: "Founder and Manager",
      company: "TLin Investments LLC",
      location: "Orlando, FL",
      date: "June 2022 - Present",
    },
    {
      title: "Founder and Manager",
      company: "LNFN Investments LLC",
      location: "Orlando, FL",
      date: "July 2022 - Present",
    },
    {
      title: "Partner and Technical Advisor",
      company: "ACG Go LLC",
      companyUrl: "https://www.acg-go.com/",
      location: "Tempe, Arizona",
      date: "March 2024 - Present",
    }
  ];

  const publications = [
    {
      title: "From Large to Mammoth: A Comparative Evaluation of Large Language Models in Vulnerability Detection",
      venue: "NDSS 2025, San Diego, CA",
      date: "February 24-28, 2025",
      authors: "Jie Lin and David Mohaisen",
      link: "https://doi.org/10.14722/ndss.2025.241491",
      type: "Conference"
    },
    {
      title: "Evaluating Large Language Models in Vulnerability Detection Under Variable Context Windows",
      venue: "ICMLA 2024, Miami, FL",
      date: "December 18-22, 2024",
      authors: "Jie Lin and David Mohaisen",
      link: "https://arxiv.org/abs/2502.00064",
      type: "Conference"
    },
    {
      title: "Entangled Clouds: Measuring the Hosting Infrastructure of the Free Contents Web",
      venue: "CCSW, ACM CCS 2023, Copenhagen, Denmark",
      date: "October 2023",
      authors: "Mohamed Alqadhi, Mohammed Alkinoon, Jie Lin, Ahmed Abdalaal, David Mohaisen",
      link: "https://doi.org/10.1145/3605763.3625274",
      type: "Workshop"
    }
  ];

  const honors = [
    { name: "Phi Beta Kappa", year: "2018" },
    { name: "Department of Modern Language Honor Society", year: "2018" },
    { name: "Upsilon Pi Epsilon (UPE) Computer Science Honor Society", year: "2016" },
    { name: "Kappa Mu Epsilon (KME) Mathematics Honor Society", year: "2016" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar dark={dark} setDark={setDark} />

      <div className="max-w-3xl mx-auto pt-12 pb-16 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light mb-3">Jie Lin</h1>
          <p className="text-xl font-medium mb-2">Ph.D. Candidate in Computer Science</p>
          <p className="text-gray-600 dark:text-gray-400">Specializing in Large Language Models & Security Research</p>
        </div>

        <div className="space-y-12">
          <Section
            id="education"
            title="Education"
            icon="graduation-cap">
            <ExperienceTimeline />
          </Section>

          <Section
            id="experience"
            title="Professional Experience"
            icon="briefcase">
            <div className="space-y-4">
              {experiences.map((job, index) => (
                <div key={index} className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-medium mb-2">{job.title} {job.company && "- "}
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {job.company}
                      </a>
                    ) : job.company}
                  </h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{job.location}</span>
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
                      {job.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="publications"
            title="Research Publications"
            icon="book">
            <PublicationList publications={publications} />
          </Section>

          <div className="grid grid-cols-1 gap-8">
            <Section
              id="skills"
              title="Skills"
              icon="code">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Languages
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">C++, Java, Python, SQL, HTML, CSS, JavaScript, Assembly</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    Technologies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Linux, J2EE, Machine Learning, Deep Learning, Large Language Models</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a2.5 2.5 0 015 0v6a2.5 2.5 0 11-5 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12a2 2 0 11-4 0 2 2 0 014 0zM4 12a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Tools
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Microsoft Office, High-Performance Computers, Regular Expression</p>
                </div>
              </div>
            </Section>

            <Section
              id="languages"
              title="Languages"
              icon="language">
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center border border-gray-100 dark:border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">English</span>
                  <span className="ml-auto text-gray-600 dark:text-gray-400 text-sm">Fluent</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center border border-gray-100 dark:border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Japanese</span>
                  <span className="ml-auto text-gray-600 dark:text-gray-400 text-sm">Fluent</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center border border-gray-100 dark:border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Mandarin</span>
                  <span className="ml-auto text-gray-600 dark:text-gray-400 text-sm">Fluent</span>
                </div>
              </div>
            </Section>

            <Section
              id="honors"
              title="Honors & Awards"
              icon="award">
              <div className="space-y-3">
                {honors.map((honor, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center border border-gray-100 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{honor.name}</span>
                    <span className="ml-auto bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-800 dark:text-gray-200">{honor.year}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="contact"
              title="Contact"
              icon="inbox">
              <Contact />
            </Section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
