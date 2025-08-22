@echo off
echo Updating Theme 2 colors from #1B425F to #00AA88...

powershell -Command "(Get-Content 'src\app\theme-2\page.tsx') -replace '#1B425F', '#00AA88' | Set-Content 'src\app\theme-2\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\components\theme2-footer.tsx') -replace '#1B425F', '#00AA88' | Set-Content 'src\app\theme-2\components\theme2-footer.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\components\theme2-header.tsx') -replace '#1B425F', '#00AA88' | Set-Content 'src\app\theme-2\components\theme2-header.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\globals.css') -replace '#1B425F', '#00AA88' | Set-Content 'src\app\theme-2\globals.css'"

echo Color update completed!
pause

