@echo off
title Knowledge base (localhost:8080)
rem Double-click: build the site with each page's last commit time and serve it on http://localhost:8080.
cd /d "%~dp0docs"

rem Only one instance: if something already listens on 8080, just open the browser.
netstat -ano | findstr /r /c:":8080 .*LISTENING" >nul
if %errorlevel%==0 (
    echo [knowledge base] Port 8080 is already in use, opening the browser only.
    start "" http://localhost:8080
    exit /b 0
)

echo [knowledge base] Writing docfx.build.json with last commit times ...
python templates\kb\git_times.py
if errorlevel 1 (
    echo [knowledge base] git_times.py failed.
    pause
    exit /b 1
)

echo [knowledge base] Building and serving http://localhost:8080 ... close this window to stop.
start "" /b cmd /c "timeout /t 30 /nobreak >nul && start "" http://localhost:8080"
"%USERPROFILE%\.dotnet\tools\docfx.exe" docfx.build.json --serve --port 8080
pause
