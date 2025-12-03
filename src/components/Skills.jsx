import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BarChart3, Brain, Code, Database, Layers, Shield } from 'lucide-react';

const technicalAreas = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Research and development of AI systems',
    skills: [
      'LLM',
      'Deep Learning',
      'Neural Networks',
      'PyTorch',
      'TensorFlow',
      'NLP',
      'Model Training',
      'Transformers',
      'Adversarial ML',
      'AI Security',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Full-Stack Development',
    icon: Layers,
    description: 'Building complete web applications',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Python',
      'REST API',
      'System Design',
      'Git',
      'Responsive UI',
      'Frontend/Backend',
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Software Engineering',
    icon: Code,
    description: 'Building scalable software systems',
    skills: [
      'OOP',
      'Design Patterns',
      'Testing & QA',
      'Agile',
      'Python',
      'C++',
      'Java',
      'Code Review',
      'Architecture',
      'Documentation',
    ],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Security',
    icon: Shield,
    description: 'Network and wireless security research',
    skills: [
      'Network Security',
      'Wireless Security',
      '802.11',
      'Security Analysis',
      'Vuln Research',
      'Cryptography',
      'Security Tools',
      'Protocol Analysis',
      'Threat Modeling',
      'Linux',
    ],
    color: 'from-red-500 to-orange-600',
  },
  {
    title: 'Quantitative Analysis',
    icon: BarChart3,
    description: 'Statistical modeling and data analysis',
    skills: [
      'Statistics',
      'Time Series',
      'Risk Analysis',
      'Portfolio Theory',
      'Python Finance',
      'Data Analysis',
      'Regression',
      'Backtesting',
      'Quant Research',
      'Financial Math',
    ],
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Data & Databases',
    icon: Database,
    description: 'Data management and analysis',
    skills: [
      'SQL',
      'DB Design',
      'PostgreSQL',
      'MongoDB',
      'Query Optimization',
      'Data Modeling',
      'ETL',
      'Data Analysis',
      'Visualization',
      'Python Data',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-theme mb-4">Technical Focus</h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">Core areas of research and development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-theme mb-1">{area.title}</h3>
                    <p className="text-xs text-theme-secondary">{area.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {area.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={`${area.title}-${skill}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.02 }}
                      className="px-2.5 py-1.5 glass rounded-lg text-xs text-theme-secondary border border-glass-border hover:glass-strong transition-all duration-200 text-center"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
