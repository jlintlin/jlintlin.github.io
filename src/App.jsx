import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import PublicationList from "./components/PublicationList";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark font-sans">
      {/* Background elements */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark"></div>

      {/* Subtle background patterns */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.07]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <Navbar dark={dark} setDark={setDark} />

      <header className="pt-32 pb-24 px-8 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <div className="mb-12 relative">
          <div className="w-20 h-20 absolute -top-6 -left-6 border-t border-l border-primary-light/30 dark:border-primary-dark/30"></div>
          <div className="w-20 h-20 absolute -bottom-6 -right-6 border-b border-r border-primary-light/30 dark:border-primary-dark/30"></div>
          <h1 className="heading-xl font-light mb-6 relative">
            Jie Lin
          </h1>
          <p className="text-xl mb-3 font-normal text-foreground-light/90 dark:text-foreground-dark/90">
            Ph.D. Candidate in Computer Science
          </p>
          <p className="text-gray-700 dark:text-gray-300 max-w-lg">
            Specializing in Large Language Models & Security Research
          </p>
        </div>
      </header>

      <main className="pb-32 relative">
        <Section id="education" title="Education" addClass="max-w-3xl">
          <ExperienceTimeline />
        </Section>

        <Section id="experience" title="Professional Experience" addClass="max-w-3xl">
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in transition-transform duration-400 hover:translate-y-[-4px]">
              <h3 className="font-medium mb-2">Graduate Teaching Assistant - <a href="https://www.ucf.edu" target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-4">University of Central Florida</a></h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Orlando, FL — Fall 2021 - Present</p>
            </div>
            <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in transition-transform duration-400 hover:translate-y-[-4px]">
              <h3 className="font-medium mb-2">Founder and Manager - TLin Investments LLC</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Orlando, FL — June 2022 - Present</p>
            </div>
            <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in transition-transform duration-400 hover:translate-y-[-4px]">
              <h3 className="font-medium mb-2">Founder and Manager - LNFN Investments LLC</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Orlando, FL — July 2022 - Present</p>
            </div>
            <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark animate-fade-in transition-transform duration-400 hover:translate-y-[-4px]">
              <h3 className="font-medium mb-2">Partner and Technical Advisor - <a href="https://www.acg-go.com/" target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:underline decoration-2 underline-offset-4">ACG Go LLC</a></h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Tempe, Arizona — Mar. 2024 - Present</p>
            </div>
          </div>
        </Section>

        <Section id="publications" title="Research Publications" addClass="max-w-3xl">
          <PublicationList />
        </Section>

        <Section id="skills" title="Skills" addClass="max-w-3xl">
          <ul className="space-y-5 list-none">
            <li className="glass p-5 rounded-lg shadow-glass dark:shadow-glass-dark">
              <div className="flex flex-col md:flex-row md:items-center">
                <strong className="min-w-32 mb-2 md:mb-0 text-primary-light dark:text-primary-dark">Languages:</strong>
                <span className="text-foreground-light/90 dark:text-foreground-dark/90">C++, Java, Python, SQL, HTML, CSS, JavaScript, Assembly</span>
              </div>
            </li>
            <li className="glass p-5 rounded-lg shadow-glass dark:shadow-glass-dark">
              <div className="flex flex-col md:flex-row md:items-center">
                <strong className="min-w-32 mb-2 md:mb-0 text-primary-light dark:text-primary-dark">Technologies:</strong>
                <span className="text-foreground-light/90 dark:text-foreground-dark/90">Linux, J2EE, Machine Learning, Deep Learning, Large Language Models</span>
              </div>
            </li>
            <li className="glass p-5 rounded-lg shadow-glass dark:shadow-glass-dark">
              <div className="flex flex-col md:flex-row md:items-center">
                <strong className="min-w-32 mb-2 md:mb-0 text-primary-light dark:text-primary-dark">Tools:</strong>
                <span className="text-foreground-light/90 dark:text-foreground-dark/90">Microsoft Office, High-Performance Computers, Regular Expression</span>
              </div>
            </li>
          </ul>
        </Section>

        <Section id="languages" title="Languages" addClass="max-w-3xl">
          <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark">
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-3 bg-background-light/40 dark:bg-background-dark/40 rounded-lg border border-white/10 dark:border-white/5">
                <span className="font-medium">English</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Fluent</span>
              </div>
              <div className="px-4 py-3 bg-background-light/40 dark:bg-background-dark/40 rounded-lg border border-white/10 dark:border-white/5">
                <span className="font-medium">Japanese</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Fluent</span>
              </div>
              <div className="px-4 py-3 bg-background-light/40 dark:bg-background-dark/40 rounded-lg border border-white/10 dark:border-white/5">
                <span className="font-medium">Mandarin</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Fluent</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="awards" title="Honors & Awards" addClass="max-w-3xl">
          <div className="glass p-6 rounded-lg shadow-glass dark:shadow-glass-dark">
            <ul className="space-y-4 list-none">
              <li className="border-l-2 border-primary-light/30 dark:border-primary-dark/30 pl-4 py-2">
                <span className="block font-medium">Phi Beta Kappa</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">2018</span>
              </li>
              <li className="border-l-2 border-primary-light/30 dark:border-primary-dark/30 pl-4 py-2">
                <span className="block font-medium">Department of Modern Language Honor Society</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">2018</span>
              </li>
              <li className="border-l-2 border-primary-light/30 dark:border-primary-dark/30 pl-4 py-2">
                <span className="block font-medium">Upsilon Pi Epsilon (UPE) Computer Science Honor Society</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">2016</span>
              </li>
              <li className="border-l-2 border-primary-light/30 dark:border-primary-dark/30 pl-4 py-2">
                <span className="block font-medium">Kappa Mu Epsilon (KME) Mathematics Honor Society</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">2016</span>
              </li>
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact" addClass="max-w-3xl">
          <div className="glass p-8 rounded-lg shadow-glass dark:shadow-glass-dark">
            <Contact />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
