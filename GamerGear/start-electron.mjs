import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

// Start Vite
console.log('Starting Vite development server...');
const vite = spawn('npm', ['run', 'dev'], { stdio: 'pipe', shell: true });

// Forward Vite's output to our console
vite.stdout.on('data', (data) => {
  const output = data.toString();
  process.stdout.write(output);
  
  // Check for the port Vite is using
  if (output.includes('Local:')) {
    const portMatch = output.match(/http:\/\/localhost:(\d+)/);
    if (portMatch && portMatch[1]) {
      const port = portMatch[1];
      console.log(`Vite is running on port ${port}`);
      
      // Start Electron with the detected port
      console.log('Starting Electron...');
      const electron = spawn('electron', ['electron.mjs', port], { 
        stdio: 'inherit', 
        shell: true,
        env: { ...process.env, NODE_ENV: 'development' }
      });
      
      electron.on('close', (code) => {
        console.log(`Electron process exited with code ${code}`);
        // When Electron exits, terminate Vite as well
        vite.kill();
        process.exit(0);
      });
    }
  }
});

vite.stderr.on('data', (data) => {
  process.stderr.write(data);
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});