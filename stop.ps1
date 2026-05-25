# Stop Next.js dev server (port 3000 by default)
param([int]$Port = 3000)

$conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if (-not $conns) {
  Write-Host "No process listening on port $Port."
  exit 0
}

$pids = $conns.OwningProcess | Sort-Object -Unique
foreach ($procId in $pids) {
  Write-Host "Stopping PID $procId (port $Port)..."
  Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Seconds 1
$still = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if ($still) {
  Write-Error "Port $Port is still in use."
  exit 1
}

Write-Host "Dev server stopped. Port $Port is free."
