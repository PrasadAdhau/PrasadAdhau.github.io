import { Header } from "@/components/portfolio/header"
import { Projects } from "@/components/portfolio/projects"
import { Footer } from "@/components/portfolio/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
