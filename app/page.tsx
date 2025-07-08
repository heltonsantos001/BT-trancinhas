import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Booking } from "@/components/booking"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
