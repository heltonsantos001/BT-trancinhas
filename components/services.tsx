import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star } from "lucide-react"
import  Image  from "next/image"
import Img1 from "../img/img1.jpg"
import Img2 from "../img/img2.jpg"
import Img3 from "../img/img3.jpg"
import Img4 from "../img/img4.jpg"
import Img5 from "../img/img5.jpg"
import Img6 from "../img/img6.jpg"

const services = [
  {
    name: "Box Braids",
    description: "Tranças soltas e versáteis, perfeitas para o dia a dia",
    duration: "6-8 horas",
    price: "R$ 280",
    image: Img3,
    popular: true,
  },
  {
    name: "Nagô Masculina Freestyle",
    description: "A Nagô Freestyle é pra quem curte um visual autêntico, com desenho livre e presença forte.",
    duration: "1-2 horas",
    price: "R$ 120",
    image: Img2,
    popular: false,
  },
  {
    name: "French Curl",
    description: "Tranças com raiz firme e pontas cacheadas que trazem leveza, volume e um visual elegante com atitude.",
    duration: "6-8 horas",
    price: "R$ 360,00",
    image: Img5,
    popular: true,
  },
  {
    name: "Gypsy Braids",
    description: "Tranças soltas com muitos cachos e volume",
    duration: "2-3 horas",
    price: "R$ 380",
    image: Img4,
    popular: false,
  },
  {
    name: "Goddess Braids",
    description: "Tranças grossas e majestosas para um visual poderoso",
    duration: "3-4 horas",
    price: "R$ 395",
    image: Img6,
    popular: false,
  },
  {
    name: "Nagô ",
    description: "Técnica de torção para cabelos cacheados naturais",
    duration: "1-2 horas",
    price: "A partir de R$25,00",
    image: Img1,
    popular: false,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de estilos de tranças para realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-purple-100">
              <div className="relative">
                 {typeof service.image === "string" ? (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                )}
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-violet-600">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-purple-800">{service.name}</CardTitle>
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                </div>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
