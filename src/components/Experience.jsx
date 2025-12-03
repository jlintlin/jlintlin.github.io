import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Lecturer',
    company: 'University of Central Florida',
    location: 'Orlando, FL',
    period: 'August 2025 - Present',
    current: true,
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Central Florida',
    location: 'Orlando, FL',
    period: 'August 2021 - August 2025',
  },
  {
    title: 'Founder and Manager',
    company: 'TLin Investments LLC',
    location: 'Orlando, FL',
    period: 'June 2022 - Present',
    current: true,
  },
  {
    title: 'Founder and Manager',
    company: 'LNFN Investments LLC',
    location: 'Orlando, FL',
    period: 'July 2022 - Present',
    current: true,
  },
  {
    title: 'Partner and Technical Advisor',
    company: 'ACG Go LLC',
    location: 'Tempe, Arizona',
    period: 'March 2024 - Present',
    current: true,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-theme"
        >
          Professional Experience
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-xl text-white flex-shrink-0"
                >
                  <Briefcase className="w-5 h-5" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-theme">{exp.title}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-500/10 dark:bg-green-400/10 text-green-700 dark:text-green-400 rounded-full text-xs flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-theme-secondary mb-3">{exp.company}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-theme-secondary text-sm">
                      <MapPin className="w-4 h-4 opacity-60" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-theme-secondary text-sm">
                      <Calendar className="w-4 h-4 opacity-60" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
