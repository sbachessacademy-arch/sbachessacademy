import { Resend } from "resend"
import { COURSE_LABELS, type EnrollmentInput } from "@/lib/enrollment"
import { getSupabaseAdmin } from "@/lib/supabase-admin"

function formatEnrollmentBody(data: EnrollmentInput) {
  const courseLabel = COURSE_LABELS[data.course]
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  })

  return {
    courseLabel,
    text: [
      "New enrollment request — SBA Chess Academy",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Course: ${courseLabel}`,
      `Submitted: ${submittedAt}`,
    ].join("\n"),
    html: `
      <h2>New enrollment request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Course:</strong> ${courseLabel}</p>
      <p><strong>Submitted:</strong> ${submittedAt}</p>
    `,
  }
}

export async function saveEnrollmentToDatabase(data: EnrollmentInput) {
  const supabase = getSupabaseAdmin()
  if (!supabase) return { ok: false as const, skipped: true }

  const { error } = await supabase.from("enrollments").insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    course: data.course,
  })

  if (error) {
    console.error("Supabase insert failed:", error.message)
    return { ok: false as const, skipped: false, error: error.message }
  }

  return { ok: true as const }
}

export async function sendEnrollmentEmail(data: EnrollmentInput) {
  const to =
    process.env.CONTACT_EMAIL?.trim() || "sbachessacademy@gmail.com"
  const { courseLabel, text, html } = formatEnrollmentBody(data)

  const resendKey = process.env.RESEND_API_KEY?.trim()
  if (resendKey) {
    const resend = new Resend(resendKey)
    const from =
      process.env.RESEND_FROM_EMAIL?.trim() || "onboarding@resend.dev"

    const { error } = await resend.emails.send({
      from: `SBA Chess Academy <${from}>`,
      to: [to],
      replyTo: data.email,
      subject: `New enrollment: ${data.name} — ${courseLabel}`,
      text,
      html,
    })

    if (error) {
      console.error("Resend failed:", error.message)
      return { ok: false as const, provider: "resend" as const, error: error.message }
    }

    return { ok: true as const, provider: "resend" as const }
  }

  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY?.trim()
  if (web3formsKey) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `New enrollment: ${data.name} — ${courseLabel}`,
        from_name: "SBA Chess Academy Website",
        name: data.name,
        email: data.email,
        phone: data.phone,
        course: courseLabel,
        message: text,
      }),
    })

    const raw = await response.text()
    let result: { success?: boolean; message?: string }
    try {
      result = JSON.parse(raw) as { success?: boolean; message?: string }
    } catch {
      const msg =
        "Web3Forms blocked the server request (use NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY for browser delivery)"
      console.error("Web3Forms failed:", msg)
      return { ok: false as const, provider: "web3forms" as const, error: msg }
    }
    if (!response.ok || !result.success) {
      const msg = result.message || "Web3Forms request failed"
      console.error("Web3Forms failed:", msg)
      return { ok: false as const, provider: "web3forms" as const, error: msg }
    }

    return { ok: true as const, provider: "web3forms" as const }
  }

  return { ok: false as const, provider: null, skipped: true }
}

export function isEnrollmentBackendConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() ||
      process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
      (process.env.SUPABASE_URL?.trim() &&
        process.env.SUPABASE_SERVICE_ROLE_KEY?.trim())
  )
}
