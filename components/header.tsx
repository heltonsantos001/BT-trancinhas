"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-purple-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              Tranças Divinas
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("agendamento")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Agendamento
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("agendamento")}
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
            >
              Agendar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("agendamento")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Agendamento
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("agendamento")}
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 w-full"
              >
                Agendar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
