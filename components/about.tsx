import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Clientes Satisfeitas",
  },
  {
    icon: Award,
    number: "5+",
    label: "Anos de Experiência",
  },
  {
    icon: Heart,
    number: "100%",
    label: "Amor pelo que Fazemos",
  },
  {
    icon: Clock,
    number: "24h",
    label: "Agendamento Online",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-violet-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
                Sobre Nós
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos especialistas em tranças afro com mais de 5 anos de experiência. Nossa missão é realçar a beleza
              natural de cada cliente, oferecendo serviços de qualidade em um ambiente acolhedor e profissional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilizamos apenas produtos de alta qualidade e técnicas tradicionais combinadas com tendências modernas
              para criar penteados únicos e duradouros.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Profissionais certificadas e experientes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Produtos de alta qualidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Ambiente higienizado e acolhedor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Agendamento flexível</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm border-purple-100">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-700">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
