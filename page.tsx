import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
