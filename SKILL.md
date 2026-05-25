---
name: preview-website
description: >-
  Start the Next.js dev server and guide preview in Cursor Simple Browser for
  this Website project. Use when the user asks to preview, run, open, or start
  the site locally, set up local development, stop the dev server, or continue
  after a dev-server interruption.
---

# Preview Website (local dev)

## Goal

Get **http://localhost:3000** serving with `npm run dev`, running in a **background** terminal. Tell the user how to open Cursor’s Simple Browser.

## Workflow

Copy and track progress:

```
- [ ] Node/npm available (install if needed)
- [ ] Dependencies installed (node_modules)
- [ ] Dev server running in background
- [ ] User told to open Simple Browser
```

### 1. Ensure Node.js and npm

**Check** (project root):

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
node -v
npm -v
```

- If `npm` fails but `node` works (Cursor-only Node): install full Node.js:

  ```powershell
  winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
  ```

  Then prepend PATH again and re-check.

### 2. Install dependencies

If `node_modules` is missing:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm install
```

Use **npm**, not pnpm, unless the user explicitly uses pnpm.

### 3. Start dev server (background)

Prefer the helper script:

```powershell
powershell -ExecutionPolicy Bypass -File .cursor/skills/preview-website/scripts/dev.ps1
```

Or manually (background shell, `block_until_ms: 0`):

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm run dev
```

Wait until output shows **Ready** and **http://localhost:3000** (poll terminal file if needed).

If port 3000 is already in use, check existing terminals before starting another server.

### 4. Preview in Cursor

Instruct the user:

1. **Ctrl+Shift+P** → **Simple Browser: Show**
2. URL: `http://localhost:3000`

Hot reload is active while the dev server runs.

### 5. Stop dev server (when asked)

Stopping is **optional** while previewing or editing. Stop when the user is done, wants port 3000 free, or before restarting cleanly.

```powershell
powershell -ExecutionPolicy Bypass -File .cursor/skills/preview-website/scripts/stop.ps1
```

Confirm port 3000 is free. Do not use `$pid` as a loop variable in PowerShell (`$PID` is reserved).

## Troubleshooting

| Issue | Action |
|-------|--------|
| `npm` not recognized | Prepend `C:\Program Files\nodejs` to `$env:Path` |
| No Node at all | `winget install OpenJS.NodeJS.LTS` |
| Missing `node_modules` | `npm install` |
| Server already running | Open Simple Browser to existing URL; don’t start a duplicate |
| Install interrupted | Re-run `npm install`, then `npm run dev` |

## Project facts

- **Framework**: Next.js 16 (`next dev`, Turbopack)
- **Entry**: `app/page.tsx`
- **Dev URL**: http://localhost:3000
