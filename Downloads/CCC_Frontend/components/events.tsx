import { Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "CUET Code Rush 2026",
    date: "May 15, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "CSE Building, CUET",
    type: "Competition",
    description: "Annual intra-university programming competition featuring algorithmic challenges.",
    featured: true
  },
  {
    title: "Web Development Bootcamp",
    date: "April 20-22, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab 3",
    type: "Workshop",
    description: "Three-day intensive workshop on modern web technologies including React and Node.js."
  },
  {
    title: "Tech Talk: AI in Healthcare",
    date: "April 28, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Auditorium",
    type: "Seminar",
    description: "Industry experts discuss the transformative impact of AI in medical diagnostics."
  }
]

export function Events() {
  return (
    <section id="events" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Events</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
              Upcoming Activities
            </h2>
          </div>
          <Button variant="outline" className="w-fit gap-2 border-border hover:bg-secondary">
            View All Events
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className={`group rounded-2xl border border-border hover:border-primary/30 transition-all ${
                event.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`p-6 ${event.featured ? 'lg:p-8' : ''} h-full flex flex-col`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {event.type}
                  </span>
                  {event.featured && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className={`font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${
                  event.featured ? 'text-2xl lg:text-3xl' : 'text-lg'
                }`}>
                  {event.title}
                </h3>
                
                <p className={`text-muted-foreground mb-6 flex-grow ${
                  event.featured ? 'text-base' : 'text-sm'
                }`}>
                  {event.description}
                </p>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
