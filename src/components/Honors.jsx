import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Trophy } from 'lucide-react';

const honors = [
  {
    title: 'Phi Beta Kappa',
    year: '2018',
  },
  {
    title: 'Department of Modern Language Honor Society',
    year: '2018',
  },
  {
    title: 'Upsilon Pi Epsilon (UPE) Computer Science Honor Society',
    year: '2016',
  },
  {
    title: 'Kappa Mu Epsilon (KME) Mathematics Honor Society',
    year: '2016',
  },
];

export function Honors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="honors" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-theme"
        >
          Honors & Awards
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {honors.map((honor, index) => (
            <motion.div
              key={honor.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                >
                  {index === 0 ? <Trophy className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-theme mb-1">{honor.title}</h3>
                  <span className="text-sm text-theme-secondary">{honor.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
