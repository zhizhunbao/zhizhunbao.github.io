@echo off
title Knowledge base (localhost:8080)
rem Double-click: serve the site on http://localhost:8080 and rebuild it whenever a file under docs\ changes;
rem the open page reloads itself after each rebuild (templates\kb\watch.py).
cd /d "%~dp0docs"

rem Only one instance: if something already listens on 8080, just open the browser.
netstat -ano | findstr /r /c:":8080 .*LISTENING" >nul
if %errorlevel%==0 (
    echo [knowledge base] Port 8080 is already in use, opening the browser only.
    start "" http://localhost:8080
    exit /b 0
)

echo [knowledge base] Building, serving http://localhost:8080 and watching docs\ ... close this window to stop.
start "" /b cmd /c "timeout /t 15 /nobreak >nul && start "" http://localhost:8080"
python -u templates\kb\watch.py 8080
pause
