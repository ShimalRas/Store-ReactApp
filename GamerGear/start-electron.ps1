# Start Vite in a new process
Start-Process -NoNewWindow npm -ArgumentList "run", "dev"

# Wait for a moment to let Vite start
Start-Sleep -Seconds 3

# Start Electron
npm run electron:start