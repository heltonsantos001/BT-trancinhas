"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-violet-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600">Estamos aqui para tirar suas dúvidas e agendar seu horário</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-purple-800">Endereço</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
               Rua general bento Gonçalves, 20
                <br />
                20 - Pulista/PE
                <br />
                CEP: 53413470
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-purple-800">Telefone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                (81) 98618-2451
                <br />
                WhatsApp disponível
                <br />
                Segunda a Domingo
              </p>
              <Button
                className="mt-4 bg-green-500 hover:bg-green-600"
                onClick={() => window.open("https://wa.me/5581986182451", "_blank")}
              >
                WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-purple-800">Horários</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">             
                Sábado: 8h às 17h
                <br />
                Domingo: 14h às 18h
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-purple-800">Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Siga-nos para ver nossos trabalhos</p>
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/bt_trancinhas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                </a>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-purple-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Dúvidas Frequentes</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-purple-700">Quanto tempo duram as tranças?</h4>
                  <p className="text-gray-600">
                    Dependendo do tipo, as tranças podem durar de 4 a 8 semanas com os cuidados adequados.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Posso lavar o cabelo com tranças?</h4>
                  <p className="text-gray-600">
                    Sim! Recomendamos lavar 1-2 vezes por semana com produtos específicos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Preciso levar algum material?</h4>
                  <p className="text-gray-600">Não, fornecemos todos os materiais necessários para o serviço.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
