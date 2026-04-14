import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Events } from "@/components/events"
import { Team } from "@/components/team"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Events />
      <Team />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
