# Enrollment form setup

When someone submits the contact form, the site can:

1. **Email you** at `sbachessacademy@gmail.com`
2. **Save the submission** in Supabase (optional spreadsheet-style database)

You need **at least one email method** (Resend or Web3Forms). Database storage is optional but recommended.

---

## Quick start (Web3Forms — easiest)

1. Go to [web3forms.com](https://web3forms.com) and sign up with **sbachessacademy@gmail.com**.
2. Create a form and copy your **Access Key**.
3. In the project folder, create a file named **`.env.local`** (not `.env.local.txt`):

   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   CONTACT_EMAIL=sbachessacademy@gmail.com
   ```

   On Windows, if the file saves as `.env.local.txt`, rename it to `.env.local` (View → show file extensions).

4. Restart the dev server (`npm run dev`).
5. Submit a test enrollment on http://localhost:3000 — check your Gmail inbox.

---

## Option B: Resend (professional emails)

1. Sign up at [resend.com](https://resend.com) with **sbachessacademy@gmail.com**.
2. Create an API key under **API Keys**.
3. Add to `.env.local`:

   ```env
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=sbachessacademy@gmail.com
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

4. On the free plan, `onboarding@resend.dev` can send to the email you signed up with until you verify a domain.
5. Restart `npm run dev` and test the form.

---

## Optional: Store enrollments in Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run the script in `supabase/enrollments.sql`.
3. Under **Project Settings → API**, copy:
   - Project URL → `SUPABASE_URL`
   - **service_role** key (secret) → `SUPABASE_SERVICE_ROLE_KEY`
4. Add to `.env.local`:

   ```env
   SUPABASE_URL=https://xxxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJhbG...
   ```

5. View rows in **Table Editor → enrollments**.

Never put the service role key in frontend code or git.

---

## Deploying (Vercel)

1. Push your site to GitHub and import on [vercel.com](https://vercel.com).
2. In the Vercel project → **Settings → Environment Variables**, add the same keys as `.env.local`.
3. Redeploy after saving variables.

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| “Enrollment is not configured” | Add `WEB3FORMS_ACCESS_KEY` or `RESEND_API_KEY` to `.env.local` and restart dev server |
| No email received | Check spam; confirm Resend/Web3Forms account email matches Gmail |
| Database error | Run `supabase/enrollments.sql`; verify `SUPABASE_SERVICE_ROLE_KEY` (not anon key) |
| Form works locally, not live | Add env vars in Vercel dashboard |
