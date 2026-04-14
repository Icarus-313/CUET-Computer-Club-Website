import { Code, Lightbulb, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Competitive Programming",
    description: "Regular practice sessions and contests to sharpen problem-solving skills and prepare for ICPC and other competitions."
  },
  {
    icon: Lightbulb,
    title: "Workshops & Seminars",
    description: "Hands-on workshops on cutting-edge technologies, from AI/ML to web development and cybersecurity."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "A supportive network of passionate students and alumni sharing knowledge and opportunities."
  },
  {
    icon: Rocket,
    title: "Project Development",
    description: "Collaborative projects that solve real-world problems and build your portfolio."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Empowering Future Tech Leaders
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            CUET Computer Club is a student-run organization dedicated to fostering a culture of 
            innovation and technical excellence. We bridge the gap between academic learning 
            and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
