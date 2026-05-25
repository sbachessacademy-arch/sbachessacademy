import { GraduationCap, BookOpen, Monitor, Trophy } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Coaches",
    description: "Learn from FIDE-rated players and experienced instructors with proven track records in competitive chess.",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Progressive learning paths designed to build skills systematically, from fundamentals to advanced strategies.",
  },
  {
    icon: Monitor,
    title: "Online & Offline Classes",
    description: "Flexible learning options to suit your schedule. Join live sessions or learn at your own pace with recordings.",
  },
  {
    icon: Trophy,
    title: "Tournament Preparation",
    description: "Comprehensive tournament training including time management, psychological preparation, and competitive simulation.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <StarIcon className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Sets Us{" "}
            <span className="text-primary">Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to excellence makes SBA Chess Academy the preferred choice for serious learners
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/20">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-card border border-border rounded-lg">
            <div className="text-left">
              <div className="font-serif text-2xl font-bold text-foreground">Ready to start your chess journey?</div>
              <div className="text-muted-foreground">Join over 500 students who have trained with us</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-border" />
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )
}
