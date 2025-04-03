'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f]">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-[#0a192f]/80 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold text-teal-400">AC.</span>
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
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-teal-400 mb-4"
          >
            👋 ¡Hola! Mi nombre es
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-100"
          >
            Alexandre Carnero
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Desarrollador Web Full Stack
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/AlexCarnerooo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors hover:text-teal-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/alexandrecarnero"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors hover:text-teal-400"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <Link to="sobre-mí" smooth={true} duration={500} className="cursor-pointer text-teal-400 animate-bounce">
              <HiArrowDown size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mí" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-teal-400"
          >
            Sobre mí
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 space-y-4 max-w-3xl mx-auto"
          >
            <p>
              Soy un desarrollador web apasionado por crear experiencias digitales excepcionales. 
              Me especializo en el desarrollo full stack, combinando diseño atractivo con funcionalidad robusta.
            </p>
            <p>
              Mi objetivo es construir aplicaciones web que no solo sean visualmente atractivas, 
              sino también intuitivas y eficientes para los usuarios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400"
          >
            Mis Proyectos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aquí irán tus proyectos */}
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400"
          >
            Habilidades
          </motion.h2>
          {/* Aquí irán tus habilidades */}
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400"
          >
            Contacto
          </motion.h2>
          {/* Aquí irá tu formulario de contacto */}
        </div>
      </section>
    </main>
  )
}
