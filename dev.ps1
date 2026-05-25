# Start Next.js dev server (run from project root)
$ErrorActionPreference = "Stop"

$nodeDir = "C:\Program Files\nodejs"
if (Test-Path $nodeDir) {
  $env:Path = "$nodeDir;$env:Path"
}

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..\..\..")
Set-Location $projectRoot

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Error "npm not found. Install Node.js LTS: winget install OpenJS.NodeJS.LTS"
}

if (-not (Test-Path "node_modules")) {
  Write-Host "Installing dependencies..."
  npm install
}

Write-Host "Starting dev server at http://localhost:3000"
npm run dev
