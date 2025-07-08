"use client"

import { Button } from "@/components/ui/button"
import { Star, Users } from "lucide-react"

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("agendamento")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
                  Tranças Divinas
                </span>
                <br />
                <span className="text-gray-800">Sua beleza em boas mãos</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Especialistas em tranças afro, box braids, nagô e muito mais. Agende seu horário e transforme seu visual
                com nossa equipe experiente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-lg px-8 py-6"
              >
                Agendar Horário
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 bg-transparent"
              >
                Ver Serviços
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 avaliações</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-gray-600">500+ clientes</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Mulher com tranças lindas"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-purple-200 to-violet-300 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
