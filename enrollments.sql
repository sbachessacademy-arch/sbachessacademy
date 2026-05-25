-- Run this in Supabase: SQL Editor → New query → Run
-- https://supabase.com/dashboard → your project → SQL Editor

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  course text not null,
  created_at timestamptz not null default now()
);

create index if not exists enrollments_created_at_idx
  on public.enrollments (created_at desc);

-- Only the server (service role key) should insert; no public access
alter table public.enrollments enable row level security;
