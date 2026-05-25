# Agent guide — Website project

Next.js 16 (App Router) + React 19 + Tailwind CSS 4. Package manager: **npm** (`package-lock.json`; `pnpm-lock.yaml` is present but npm is the default here).

## Preview / dev server

When the user asks to **preview**, **run**, or **start** the website:

1. Read and follow [.cursor/skills/preview-website/SKILL.md](.cursor/skills/preview-website/SKILL.md), or run:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .cursor/skills/preview-website/scripts/dev.ps1
   ```

2. After the server is ready, tell them to open **Simple Browser** (`Ctrl+Shift+P` → “Simple Browser: Show”) at **http://localhost:3000**.

Do not ask the user to run install/dev commands manually unless Node cannot be installed or the server fails.

## Stop dev server

You do **not** need to stop the server to close Simple Browser or edit files. Stop it when the user is done for the day, wants to free port 3000, or before starting a fresh server.

Run:

```powershell
powershell -ExecutionPolicy Bypass -File .cursor/skills/preview-website/scripts/stop.ps1
```

Or tell the agent: **“stop the dev server”** — it should run the script above.

## Common commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` → http://localhost:3000 |
| Production build | `npm run build` |
| Production serve | `npm start` (after build) |
| Lint | `npm run lint` |

## Layout

- `app/` — routes and layout (`page.tsx`, `layout.tsx`)
- `components/` — page sections and UI (shadcn-style under `components/ui/`)
- `public/` — static assets
- `styles/` / `app/globals.css` — global styles

## Windows note

If `npm` is not found in the terminal, prepend Node to PATH:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
```

If Node is missing entirely: `winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements`, then refresh PATH as above.
