import { Github, Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Adil Raihan",
    role: "President",
    department: "CSE, 20 Batch",
    image: "/team/president.jpg",
    github: "#",
    linkedin: "#",
    email: "u2004031@student.cuet.ac.bd"
  },
  {
    name: "Sakib Safwan",
    role: "Vice President",
    department: "CSE, 20 Batch",
    image: "/team/vp.jpg",
    github: "#",
    linkedin: "#",
    email: "u2004084@student.cuet.ac.bd"
  },
  {
    name: "Fahim Ferdous",
    role: "General Secretary",
    department: "CSE, 20 Batch",
    image: "/team/gs.jpg",
    github: "#",
    linkedin: "#",
    email: "u2004058@student.cuet.ac.bd"
  },
  {
    name: "Adnan Faisal",
    role: "Technical Lead",
    department: "CSE, 20 Batch",
    image: "/team/tech.jpg",
    github: "#",
    linkedin: "#",
    email: "tech@cuetcc.org"
  },
  {
    name: "Rakib Hasan",
    role: "Event Coordinator",
    department: "CSE, 20 Batch",
    image: "/team/events.jpg",
    github: "#",
    linkedin: "#",
    email: "events@cuetcc.org"
  },
  {
    name: "Shadman Saleh",
    role: "PR & Communications",
    department: "CSE, 20 Batch",
    image: "/team/pr.jpg",
    github: "#",
    linkedin: "#",
    email: "pr@cuetcc.org"
  }
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Team</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Meet the Executive Committee
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dedicated students leading the club with passion and vision for 2025-2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div 
              key={member.name}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-3xl font-bold text-muted-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{member.department}</p>
                
                {/* Social links */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border w-full justify-center">
                  <a 
                    href={member.github} 
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.linkedin} 
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
