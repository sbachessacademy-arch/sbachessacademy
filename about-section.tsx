import { Award, BookOpen } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coach Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-lg bg-card border border-border overflow-hidden relative">
              {/* Placeholder with chess-themed design */}
              <div className="absolute inset-0 flex items-center justify-center chess-pattern bg-secondary">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                    <CoachIcon className="w-16 h-16 text-primary/40" />
                  </div>
                  <p className="text-muted-foreground text-sm">Head Coach Photo</p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              About Us
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Champions{" "}
              <span className="text-primary">Since 2010</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010, SBA Chess Academy has been at the forefront of chess education, 
                nurturing young minds and transforming beginners into strategic thinkers. Our 
                mission is to make chess accessible to everyone while maintaining the highest 
                standards of instruction.
              </p>
              <p>
                Led by <span className="text-foreground font-medium">Mr. Kalyansundaram</span>, 
                a FIDE-rated Master with over 20 years of competitive experience and 
                tournament victories, our academy combines classical chess 
                principles with modern teaching methodologies.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary font-serif text-xl font-bold">FIDE Certified</div>
                <div className="text-sm text-muted-foreground">Training Programs</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-primary font-serif text-xl font-bold">National Level</div>
                <div className="text-sm text-muted-foreground">Tournament Coach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoachIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
