import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, MapPin, User } from 'lucide-react';

const education = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'University of Central Florida',
    location: 'Orlando, FL',
    period: 'August 2020 - August 2025',
    advisor: 'Dr. David Mohaisen',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Emory University',
    location: 'Atlanta, GA',
    period: 'September 2018 - May 2020',
    color: 'from-purple-500 to-pink-600',
  },
  {
    degree: 'Bachelor of Science in Computer Science and Mathematics',
    institution: 'Ursinus College',
    location: 'Collegeville, PA',
    period: 'August 2014 - May 2018',
    minor: 'Japanese',
    advisor: 'Dr. Akshaye Dhawan',
    color: 'from-cyan-500 to-blue-600',
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-theme"
        >
          Education
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 dark:from-blue-600 dark:via-purple-600 dark:to-cyan-600 hidden md:block opacity-30" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-theme-bg hidden md:block z-10"
                />

                <div className="md:ml-20 glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex-1">
                      <div className={`inline-block bg-gradient-to-r ${edu.color} text-white px-4 py-1.5 rounded-full text-sm mb-3`}>
                        {edu.period}
                      </div>
                      <h3 className="text-theme mb-3">{edu.degree}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-theme-secondary">
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-theme-secondary">
                          <MapPin className="w-4 h-4 opacity-60" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {edu.advisor && (
                    <div className="flex items-center gap-2 text-theme-secondary mt-4 pt-4 border-t border-glass-border">
                      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Advisor: {edu.advisor}</span>
                    </div>
                  )}

                  {edu.minor && (
                    <div className="mt-4 pt-4 border-t border-glass-border text-theme-secondary">
                      Minor: {edu.minor}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
