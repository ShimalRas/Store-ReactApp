// start-app.js
const { spawn, exec } = require('child_process');
const path = require('path');

// Start Vite server
const viteProcess = spawn('npm', ['run', 'dev', '--', '--port', '3000'], {
  shell: true,
  stdio: 'inherit'
});

// Give Vite time to start
setTimeout(() => {
  // Start Electron
  console.log('Starting Electron...');
  const electronProcess = spawn('npx', ['electron', 'electron-main.cjs', '3000'], {
    shell: true,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });

  // Handle process exit
  electronProcess.on('exit', (code) => {
    console.log(`Electron exited with code ${code}`);
    viteProcess.kill();
    process.exit(0);
  });
}, 3000); // Wait 3 seconds

// Handle main process exit
process.on('SIGINT', () => {
  viteProcess.kill();
  process.exit(0);
});