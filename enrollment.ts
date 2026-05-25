import { z } from "zod"

export const enrollmentSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required"),
  phone: z.string().trim().min(8, "Phone is required").max(20),
  course: z.enum(["beginner", "intermediate", "advanced", "private"]),
})

export type EnrollmentInput = z.infer<typeof enrollmentSchema>

export const COURSE_LABELS: Record<EnrollmentInput["course"], string> = {
  beginner: "Beginner Course (from age 5)",
  intermediate: "Intermediate Course",
  advanced: "Advanced Course",
  private: "Private Coaching",
}
