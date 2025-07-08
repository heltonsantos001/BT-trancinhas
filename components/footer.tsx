import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-violet-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-300 to-violet-400 rounded-full"></div>
              <h3 className="text-xl font-bold">BT Trancinhas</h3>
            </div>
            <p className="text-purple-200">
              Especialistas em tranças afro, realçando sua beleza natural com carinho e profissionalismo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-purple-200">
              <p>Rua general bento Gonçalves, 20 - A</p>
              <p>Paulista/PE - CEP: 53413470</p>
              <p>(81) 98618-2451</p>
              <p>contato@trancasdivinas.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-400" /> por Helton Santos © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
