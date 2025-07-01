"use client"

import { Instagram, Linkedin, Github, Mail, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

export default function DeveloperProfileCard() {
  const [isHovered, setIsHovered] = useState(false)

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "Zustand",
    "Tauri",
    "Electron",
    "PySide6",
    "SQL",
    "PostgreSQL",
    "SQLite3",
    "Git",
    "GitHub",
    "Flutter",
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/andhak/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Github, href: "https://github.com/AndHak", label: "GitHub", color: "hover:bg-purple-600" },
    { icon: Mail, href: "mailto:andresfg13789@gmail.com", label: "Email", color: "hover:bg-red-500" },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <section
        className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
          isHovered ? "shadow-3xl scale-[1.02]" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Profile Image */}
          <div className="relative group overflow-visible">
            <div className="w-64 h-64 rounded-2xl overflow-vissible border-4 border-gray-700 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
              <img
                src="/luffy.png"
                alt="Luffy"
                className="overflow-visible relative h-[140%] w-[140%] z-9 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-900 animate-pulse"></div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Desarrollador
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-300 font-medium">Andres Felipe Martínez Guerra</h2>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>Colombia</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>6to Semestre</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Soy estudiante de sexto semestre de{" "}
              <span className="text-cyan-400 font-semibold">Ingeniería de Sistemas</span> de la universidad de Nariño, me especializo en el
              desarrollo web moderno y aplicaciones de escritorio. Manejo{" "}
              <span className="text-blue-400 font-semibold">buenas prácticas SOLID,</span>{" "}
              <span className="text-purple-400 font-semibold">MVVM, MVC y metodologias agiles como clean architecture</span>, siempre busco crear soluciones
              eficientes, escalables y modernas.
            </p>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-200">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm font-medium transition-all duration-200 hover:bg-cyan-600 hover:text-white cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color} group`}
                >
                  <Icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
