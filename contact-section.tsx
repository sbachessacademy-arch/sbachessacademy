"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react"
import { submitEnrollment } from "@/lib/submit-enrollment"
import type { EnrollmentInput } from "@/lib/enrollment"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [course, setCourse] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()

    if (!course) {
      setError("Please select a course.")
      return
    }

    setLoading(true)

    try {
      await submitEnrollment({
        name,
        email,
        phone,
        course: course as EnrollmentInput["course"],
      })

      setSubmitted(true)
      form.reset()
      setCourse("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Mail className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to{" "}
            <span className="text-primary">Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and we&apos;ll get back to you within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your enrollment request. Our team will contact you shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    disabled={loading}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      disabled={loading}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 96295 23885"
                      required
                      disabled={loading}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="text-foreground">Select Course</Label>
                  <Select
                    value={course}
                    onValueChange={setCourse}
                    required
                    disabled={loading}
                  >
                    <SelectTrigger id="course" className="bg-secondary border-border text-foreground">
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="beginner">Beginner Course (from age 5)</SelectItem>
                      <SelectItem value="intermediate">Intermediate Course</SelectItem>
                      <SelectItem value="advanced">Advanced Course</SelectItem>
                      <SelectItem value="private">Private Coaching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enrollment
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Have questions? Reach out to us through any of the following channels and we&apos;ll be happy to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Visit Us</div>
                  <div className="text-muted-foreground">
                    102, Jayyapa Layout, Kudlu<br />
                    Bangalore, Karnataka 560068
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Call Us</div>
                  <div className="text-muted-foreground">
                    +91 96295 23885<br />
                    Mon-Sun: 9AM - 8PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email Us</div>
                  <div className="text-muted-foreground">
                    sbachessacademy@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-lg bg-secondary border border-border overflow-hidden relative chess-pattern">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
