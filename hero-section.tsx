import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden chess-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Decorative chess piece silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <KingIcon className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Enrollments Open for 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Master the{" "}
            <span className="text-primary">Game of Chess</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Unlock your strategic potential with expert coaching at SBA Chess Academy. 
            From beginners to tournament champions, we shape minds that think ahead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold group"
            >
              <Link href="#contact">
                Join a Class
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base"
            >
              <Link href="#about">
                <Play className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto">
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Students Trained</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Tournament Wins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}

function KingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="currentColor">
      <g>
        <path d="M 22.5,11.63 L 22.5,6" strokeLinejoin="miter" style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.5 }} />
        <path d="M 20,8 L 25,8" strokeLinejoin="miter" style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.5 }} />
        <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style={{ fill: "currentColor", stroke: "currentColor", strokeLinecap: "butt", strokeLinejoin: "miter" }} />
        <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style={{ fill: "currentColor", stroke: "currentColor" }} />
        <path d="M 12.5,30 C 18,27 27,27 32.5,30" style={{ fill: "none", stroke: "currentColor" }} />
        <path d="M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5" style={{ fill: "none", stroke: "currentColor" }} />
        <path d="M 12.5,37 C 18,34 27,34 32.5,37" style={{ fill: "none", stroke: "currentColor" }} />
      </g>
    </svg>
  )
}
