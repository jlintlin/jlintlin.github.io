import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FileText, Calendar, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'From Large to Mammoth: A Comparative Evaluation of Large Language Models in Vulnerability Detection',
    date: 'February 2025',
    venue: 'NDSS 2025, San Diego, CA – Feb 24–28, 2025',
    authors: 'Jie Lin and David Mohaisen',
    type: 'Conference',
    link: 'https://doi.org/10.14722/ndss.2025.241491',
  },
  {
    title: 'Evaluating Large Language Models in Vulnerability Detection Under Variable Context Windows',
    date: 'December 2024',
    venue: 'ICMLA 2024, Miami, FL – Dec 18–22, 2024',
    authors: 'Jie Lin and David Mohaisen',
    type: 'Conference',
    link: 'https://arxiv.org/abs/2502.00064',
  },
  {
    title: 'Entangled Clouds: Measuring the Hosting Infrastructure of the Free Contents Web',
    date: 'October 2023',
    venue: 'CCSW, ACM CCS 2023 – Copenhagen, Denmark',
    authors: 'Mohamed Alqadhi, Mohammed Alkinoon, Jie Lin, Ahmed Abdalaal, David Mohaisen',
    type: 'Workshop',
    link: 'https://doi.org/10.1145/3605763.3625274',
  },
];

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-theme"
        >
          Research Publications
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-6 md:p-8 hover:glass-strong transition-all duration-300 hover:scale-[1.01] group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-xl flex items-center justify-center text-white">
                    <FileText className="w-8 h-8" />
                  </div>
                </motion.div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-theme group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {pub.title}
                    </h3>
                    <span
                      className={`flex-shrink-0 px-3 py-1 rounded-full text-xs ${
                        pub.type === 'Conference'
                          ? 'bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400'
                          : 'bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400'
                      }`}
                    >
                      {pub.type}
                    </span>
                  </div>

                  <p className="text-theme-secondary text-sm">{pub.authors}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-theme-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 opacity-60" />
                      <span>{pub.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 opacity-60" />
                      <span>{pub.venue}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={pub.link}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                    >
                      <span>Read paper</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
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
