@echo off
echo Updating theme-3 colors and paths...

REM Replace colors from theme-2 to theme-3
powershell -Command "(Get-Content 'src\app\theme-3\page.tsx') -replace '#1B425F', '#7C3AED' | Set-Content 'src\app\theme-3\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-3\page.tsx') -replace '#00AA88', '#8B5CF6' | Set-Content 'src\app\theme-3\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-3\page.tsx') -replace 'font-onest', 'font-inter' | Set-Content 'src\app\theme-3\page.tsx'"

REM Replace paths from theme-2 to theme-3
powershell -Command "(Get-Content 'src\app\theme-3\page.tsx') -replace '/theme-2/', '/theme-3/' | Set-Content 'src\app\theme-3\page.tsx'"

REM Update all other page files
for /r "src\app\theme-3" %%f in (*.tsx) do (
    if not "%%f"=="src\app\theme-3\page.tsx" (
        powershell -Command "(Get-Content '%%f') -replace '#1B425F', '#7C3AED' | Set-Content '%%f'"
        powershell -Command "(Get-Content '%%f') -replace '#00AA88', '#8B5CF6' | Set-Content '%%f'"
        powershell -Command "(Get-Content '%%f') -replace 'font-onest', 'font-inter' | Set-Content '%%f'"
        powershell -Command "(Get-Content '%%f') -replace '/theme-2/', '/theme-3/' | Set-Content '%%f'"
    )
)

echo Theme-3 colors and paths updated!
pause
