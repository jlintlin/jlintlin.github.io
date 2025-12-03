import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const contacts = [
  {
    name: 'Email',
    icon: <Mail className="h-5 w-5" />,
    href: 'mailto:Jie.Lin@ucf.edu',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://linkedin.com/in/jie-lin-681421129/',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com/jlintlin',
    color: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
  },
  {
    name: 'Google Scholar',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.328 2.002v9.2q0 .51-.47.95-.47.45-1 .45-.54 0-.97-.45-.48-.45-.48-.95v-9.2h-6.16q-.91 0-1.69.69-.77.68-.77 1.6v7.36q0 .92.77 1.6.78.69 1.69.69h7.16q.91 0 1.69-.69.78-.68.78-1.6v-13.16q0-.91-.78-1.6-.78-.68-1.69-.68h-18.62q-.91 0-1.69.68-.77.69-.77 1.6v18.61q0 .92.77 1.61t1.69.69h18.62q.91 0 1.69-.69.78-.69.78-1.61v-3.39q0-.5.47-.95t1-.45q.54 0 1.01.45.47.45.47.95v3.39q0 2-1.39 3.38-1.39 1.39-3.35 1.39h-18.62q-1.96 0-3.35-1.39-1.39-1.38-1.39-3.38v-18.61q0-1.96 1.39-3.35 1.39-1.39 3.35-1.39h18.62q1.96 0 3.35 1.39 1.39 1.39 1.39 3.35z" stroke="none" />
        <path d="M10.46 9.95l2.42 1.98q-3.98.26-3.98 3.13 0 1.4.87 2.36.86.96 2.31.96 1.39 0 2.37-.87.98-.86.98-2.16 0-1.2-1.14-2.44-1.15-1.24-3.74-3.88-.14-.14-.09-.28.04-.15.22-.15h6.47q.91 0 1.69-.68.77-.69.77-1.6v-.2q0-.91-.77-1.6-.78-.68-1.69-.68h-7.16q-.91 0-1.68.68-.78.69-.78 1.6v.2q0 .91.78 1.6.77.68 1.68.68h.09v.13q0 .32.25.58z" stroke="none" />
      </svg>
    ),
    href: 'https://scholar.google.com/citations?user=Zq_Jr-4AAAAJ&hl=en',
    color: 'from-blue-400 to-sky-600',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-20 px-4 pb-32 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-theme"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col items-center gap-3">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 + 0.2 }}
                  className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {contact.icon}
                </motion.div>
                <span className="text-theme text-center text-sm">{contact.name}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-theme-secondary">
            © {new Date().getFullYear()} Jie Lin, Ph.D. | TLin Investments LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
