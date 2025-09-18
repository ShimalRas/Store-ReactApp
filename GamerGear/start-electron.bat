@echo off
echo Starting Vite development server...

:: Start Vite and capture its output
start /B npm run dev > vite_output.txt

:: Wait a moment for Vite to start
timeout /t 3 > nul

:: Extract the port number from the output
findstr /C:"Local:" vite_output.txt > port_info.txt
for /f "tokens=2 delims=:" %%i in (port_info.txt) do (
  set PORT=%%i
  set PORT=!PORT:/=!
  set PORT=!PORT:~1!
)

:: Launch Electron with the correct port
echo Launching Electron with port %PORT%...
electron electron.cjs %PORT%

:: Clean up temporary files
del vite_output.txt
del port_info.txt