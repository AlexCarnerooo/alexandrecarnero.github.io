'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-[#0a192f]/80 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold">AC.</span>
            </motion.div>
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex gap-8"
            >
              {['Inicio', 'Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-teal-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hola, soy Alexandre Carnero
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Desarrollador Web Full Stack
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <Link to="sobre-mí" smooth={true} duration={500} className="cursor-pointer">
              <HiArrowDown size={24} className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Placeholder sections - We'll implement these next */}
      <section id="sobre-mí" className="min-h-screen bg-[#0a192f]">
        {/* Sobre mí content */}
      </section>

      <section id="proyectos" className="min-h-screen bg-[#0a192f]">
        {/* Proyectos content */}
      </section>

      <section id="habilidades" className="min-h-screen bg-[#0a192f]">
        {/* Habilidades content */}
      </section>

      <section id="contacto" className="min-h-screen bg-[#0a192f]">
        {/* Contacto content */}
      </section>
    </main>
  )
}
