import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "Beginner Workshop",
    type: "Workshop",
    date: "June 5, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    spots: 8,
  },
  {
    title: "Monthly Rapid Tournament",
    type: "Tournament",
    date: "June 12, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Academy Hall",
    spots: 4,
  },
  {
    title: "Intermediate Strategy Session",
    type: "Class",
    date: "June 15, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "Online",
    spots: 12,
  },
  {
    title: "Summer Chess Camp",
    type: "Camp",
    date: "June 20-25, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Academy Hall",
    spots: 6,
  },
]

const typeColors: Record<string, string> = {
  Workshop: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Tournament: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Class: "bg-primary/10 text-primary border-primary/20",
  Camp: "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

export function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Calendar className="w-4 h-4" />
            Events & Schedule
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Upcoming{" "}
            <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join our classes, workshops, and tournaments to sharpen your skills
          </p>
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeColors[event.type]}`}>
                      {event.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {event.spots} spots left
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                  Register
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  )
}
