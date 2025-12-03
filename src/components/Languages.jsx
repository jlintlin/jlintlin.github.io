import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const languages = [
  { name: 'English' },
  { name: 'Japanese' },
  { name: 'Mandarin' },
];

export function Languages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="languages" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-400/10">
              <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-theme-secondary">Fluent</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <span className="text-theme text-center">{lang.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
