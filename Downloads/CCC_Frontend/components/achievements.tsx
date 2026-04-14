import { Trophy, Medal, Award, Star } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "ICPC Regional Champions",
    year: "2025",
    description: "First place at the ACM ICPC Dhaka Regional Programming Contest."
  },
  {
    icon: Medal,
    title: "National Hackathon Winners",
    year: "2024",
    description: "Gold medal at Bangladesh National Hackathon with AI-powered healthcare solution."
  },
  {
    icon: Award,
    title: "Best Tech Club Award",
    year: "2024",
    description: "Recognized as the best technology club among all engineering universities."
  },
  {
    icon: Star,
    title: "Google Solution Challenge",
    year: "2023",
    description: "Top 50 globally in Google Solution Challenge for sustainable development project."
  }
]

const stats = [
  { value: "15+", label: "ICPC Regional Qualifications" },
  { value: "30+", label: "National Competition Wins" },
  { value: "200+", label: "Alumni in Top Tech Companies" },
  { value: "50+", label: "Open Source Contributions" }
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Achievements</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Our Track Record of Excellence
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A legacy of success built by talented and dedicated members over the years.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement) => (
            <div 
              key={achievement.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="rounded-2xl bg-card border border-border p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
