import { motion } from 'motion/react';
import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const roles = [
  {
    icon: GraduationCap,
    title: 'Lecturer',
    org: 'University of Central Florida',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Briefcase,
    title: 'Founder & Manager',
    org: 'TLin & LNFN Investments',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Technical Advisor',
    org: 'ACG Go LLC',
    color: 'from-cyan-500 to-blue-600',
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-32 md:pt-20">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-theme tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Jie Lin, Ph.D.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-theme-secondary mb-12 max-w-3xl mx-auto"
        >
          Exploring Technology, Teaching, and Building
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center text-white mb-3 mx-auto`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-theme mb-1">{role.title}</h3>
                <p className="text-sm text-theme-secondary">{role.org}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-6 max-w-3xl mx-auto"
        >
          <p className="text-theme-secondary leading-relaxed">
            Computer Science researcher and educator, interested in AI security, full-stack systems, and
            quantitative modeling. Always learning, always curious.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
