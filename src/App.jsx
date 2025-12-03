import { motion } from 'motion/react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Honors } from './components/Honors';
import { Languages } from './components/Languages';
import { Navigation } from './components/Navigation';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { ThemeProvider } from './utils/theme-context';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative bg-theme text-theme">
        <div className="fixed inset-0 bg-theme transition-colors duration-500 -z-10">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-lighten"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-lighten"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-lighten"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>

        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Publications />
        <Skills />
        <Languages />
        <Honors />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
