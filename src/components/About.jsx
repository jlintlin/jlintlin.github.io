import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { User } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="mb-8">
            <h2 className="text-theme inline-block relative mb-6">
              About
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-theme mb-2">Learning</h3>
              <p className="text-sm text-theme-secondary">
                Continuously exploring new ideas, technologies, and ways of thinking
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-400/10 rounded-xl flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-theme mb-2">Building</h3>
              <p className="text-sm text-theme-secondary">
                Creating systems and solutions across research, education, and industry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-xl flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-theme mb-2">Teaching</h3>
              <p className="text-sm text-theme-secondary">
                Sharing knowledge and helping others think deeply about technology
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-theme-secondary leading-relaxed mb-4">
              I teach computer science at the University of Central Florida, where I try to help students understand
              not just the mechanics of code, but the deeper patterns and principles that make systems work. My
              research focuses on AI security and large language models — areas that fascinate me because they sit at
              the intersection of theoretical possibility and practical reality.
            </p>
            <p className="text-theme-secondary leading-relaxed">
              Outside of academia, I work on quantitative modeling for investment and advise technology companies.
              These experiences keep me grounded in real-world applications and constantly learning. I have found that
              the best way to understand something deeply is to build it, whether that is a full-stack application, a
              statistical model, or a research framework. I am fortunate to work across different domains — each one
              teaches me something new and challenges me to think differently.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
