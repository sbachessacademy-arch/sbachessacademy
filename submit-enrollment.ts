import { COURSE_LABELS, type EnrollmentInput } from "@/lib/enrollment"

export async function submitEnrollmentViaWeb3Forms(
  data: EnrollmentInput,
  accessKey: string
) {
  const courseLabel = COURSE_LABELS[data.course]
  const message = [
    "New enrollment request — SBA Chess Academy",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Course: ${courseLabel}`,
  ].join("\n")

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enrollment: ${data.name} — ${courseLabel}`,
      from_name: "SBA Chess Academy Website",
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: courseLabel,
      message,
    }),
  })

  const raw = await response.text()
  let result: { success?: boolean; message?: string }
  try {
    result = JSON.parse(raw) as { success?: boolean; message?: string }
  } catch {
    throw new Error(
      "Could not reach the form service. Check your internet connection and try again."
    )
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Form submission failed. Please try again.")
  }
}

export async function submitEnrollmentViaApi(data: EnrollmentInput) {
  const response = await fetch("/api/enroll", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  const raw = await response.text()
  let result: { error?: string }
  try {
    result = JSON.parse(raw) as { error?: string }
  } catch {
    throw new Error(
      "Server error while submitting. Please call +91 96295 23885 or email sbachessacademy@gmail.com."
    )
  }

  if (!response.ok) {
    throw new Error(result.error ?? "Something went wrong. Please try again.")
  }
}

export async function submitEnrollment(data: EnrollmentInput) {
  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
  if (web3Key) {
    await submitEnrollmentViaWeb3Forms(data, web3Key)
    return
  }

  await submitEnrollmentViaApi(data)
}
