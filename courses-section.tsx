import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    level: "Beginner",
    ageGroup: "From age 5",
    duration: "3 months",
    description: "Perfect for those new to chess. Learn the fundamentals, piece movements, basic tactics, and develop a love for the game.",
    features: ["Chess rules & notation", "Basic openings", "Simple tactics", "Fun puzzles"],
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    level: "Intermediate",
    duration: "6 months",
    description: "Build on your foundation with advanced tactics, opening repertoires, endgame techniques, and tournament preparation.",
    features: ["Opening theory", "Tactical patterns", "Endgame basics", "Analysis skills"],
    color: "bg-primary/10 text-primary border-primary/20",
    featured: true,
  },
  {
    level: "Advanced",
    duration: "12 months",
    description: "Master-level training for serious competitors. Deep positional understanding, complex endgames, and professional game analysis.",
    features: ["Advanced strategy", "Tournament prep", "Game analysis", "Mental training"],
    color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <PawnIcon className="w-4 h-4" />
            Our Programs
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Courses for Every{" "}
            <span className="text-primary">Skill Level</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Structured programs from your first move to tournament success. Beginners start from age 5;
            intermediate and advanced groups are open to all ages based on skill, not age.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${
                course.featured ? "ring-2 ring-primary/50 relative" : ""
              }`}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border mb-4 w-fit ${course.color}`}>
                  {course.level}
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">
                  {course.level} Course
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {"ageGroup" in course && course.ageGroup && (
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {course.ageGroup}
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  asChild 
                  className={`w-full group ${
                    course.featured 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Link href="#contact">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function PawnIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="currentColor">
      <path d="M 22.5,9 C 19.79,9 17.5,11.29 17.5,14 C 17.5,16.71 19.79,19 22.5,19 C 25.21,19 27.5,16.71 27.5,14 C 27.5,11.29 25.21,9 22.5,9 z" />
      <path d="M 15.5,19 L 29.5,19 L 29.5,22 L 15.5,22 L 15.5,19 z" />
      <path d="M 13,36 C 13,36 15.79,30 22.5,30 C 29.21,30 32,36 32,36 L 32,39 L 13,39 L 13,36 z" />
      <path d="M 14,22.5 C 14,22.5 17.5,26 22.5,26 C 27.5,26 31,22.5 31,22.5 L 31,28 C 31,28 28.5,30 22.5,30 C 16.5,30 14,28 14,28 L 14,22.5 z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  )
}
