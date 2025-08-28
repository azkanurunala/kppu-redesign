# Script untuk adaptasi styling theme-2, 3, 4, 5
# Penggunaan: powershell -ExecutionPolicy Bypass -File adapt_theme_styling.ps1

Write-Host "=== SCRIPT ADAPTASI STYLING THEME ===" -ForegroundColor Green

# Definisi warna untuk setiap theme
$themeColors = @{
    "theme-2" = @{
        "primary" = "#006666"
        "primary-dark" = "#004d4d"
        "accent" = "#00AA88"
        "bg-dark" = "#1a1a1a"
        "text-light" = "#ffffff"
    }
    "theme-3" = @{
        "primary" = "#421BBC"
        "primary-dark" = "#2d0f8a"
        "accent" = "#6366F1"
        "bg-gradient" = "from-purple-900 to-indigo-900"
        "text-light" = "#ffffff"
    }
    "theme-4" = @{
        "primary" = "#dc2626"
        "primary-dark" = "#1e3a8a"
        "accent" = "#dc2626"
        "bg-dynamic" = "bg-white dark:bg-gray-900"
        "text-light" = "#ffffff"
    }
    "theme-5" = @{
        "primary" = "#FF6B35"
        "primary-dark" = "#e55a2b"
        "accent" = "#FF8A65"
        "bg-dark" = "#1a1a1a"
        "text-light" = "#ffffff"
    }
}

foreach ($theme in $themeColors.Keys) {
    Write-Host "`n=== PROCESSING $theme ===" -ForegroundColor Yellow
    
    $colors = $themeColors[$theme]
    $themeDir = "src/app/$theme"
    
    if (Test-Path $themeDir) {
        # Cari semua file .tsx di theme
        $files = Get-ChildItem -Path $themeDir -Recurse -Include "*.tsx"
        
        foreach ($file in $files) {
            try {
                $content = Get-Content $file.FullName -Raw -Encoding UTF8
                $originalContent = $content
                
                # Adaptasi berdasarkan theme
                switch ($theme) {
                    "theme-2" {
                        # Theme-2: Cyan/Hijau
                        $content = $content -replace "bg-primary-dark", "bg-[#006666]"
                        $content = $content -replace "text-primary", "text-[#006666]"
                        $content = $content -replace "bg-primary", "bg-[#006666]"
                        $content = $content -replace "hover:bg-primary", "hover:bg-[#00AA88]"
                        $content = $content -replace "border-primary", "border-[#006666]"
                        $content = $content -replace "bg-card", "bg-[#1a1a1a]"
                        $content = $content -replace "text-foreground", "text-white"
                        $content = $content -replace "text-muted-foreground", "text-gray-300"
                    }
                    "theme-3" {
                        # Theme-3: Purple
                        $content = $content -replace "bg-primary-dark", "bg-gradient-to-br from-purple-900 to-indigo-900"
                        $content = $content -replace "text-primary", "text-[#421BBC]"
                        $content = $content -replace "bg-primary", "bg-[#421BBC]"
                        $content = $content -replace "hover:bg-primary", "hover:bg-[#6366F1]"
                        $content = $content -replace "border-primary", "border-[#421BBC]"
                        $content = $content -replace "bg-card", "bg-white/10 backdrop-blur-sm"
                        $content = $content -replace "text-foreground", "text-white"
                        $content = $content -replace "text-muted-foreground", "text-white/70"
                    }
                    "theme-4" {
                        # Theme-4: Red + Dark Blue
                        $content = $content -replace "bg-primary-dark", "bg-[#1e3a8a]"
                        $content = $content -replace "text-primary", "text-[#dc2626]"
                        $content = $content -replace "bg-primary", "bg-[#dc2626]"
                        $content = $content -replace "hover:bg-primary", "hover:bg-[#b91c1c]"
                        $content = $content -replace "border-primary", "border-[#dc2626]"
                        $content = $content -replace "bg-card", "bg-white dark:bg-gray-900"
                        $content = $content -replace "text-foreground", "text-gray-800 dark:text-white"
                        $content = $content -replace "text-muted-foreground", "text-gray-600 dark:text-white/80"
                    }
                    "theme-5" {
                        # Theme-5: Orange
                        $content = $content -replace "bg-primary-dark", "bg-[#1a1a1a]"
                        $content = $content -replace "text-primary", "text-[#FF6B35]"
                        $content = $content -replace "bg-primary", "bg-[#FF6B35]"
                        $content = $content -replace "hover:bg-primary", "hover:bg-[#FF8A65]"
                        $content = $content -replace "border-primary", "border-[#FF6B35]"
                        $content = $content -replace "bg-card", "bg-[#1a1a1a]"
                        $content = $content -replace "text-foreground", "text-white"
                        $content = $content -replace "text-muted-foreground", "text-gray-300"
                    }
                }
                
                # Update jika ada perubahan
                if ($content -ne $originalContent) {
                    Set-Content $file.FullName $content -Encoding UTF8
                    Write-Host "  Updated styling: $($file.Name)" -ForegroundColor Cyan
                }
            }
            catch {
                Write-Host "  Error updating $($file.FullName): $($_.Exception.Message)" -ForegroundColor Red
            }
        }
    } else {
        Write-Host "Theme directory not found: $themeDir" -ForegroundColor Red
    }
}

Write-Host "`n=== STYLING ADAPTATION COMPLETED ===" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Test each theme visually" -ForegroundColor White
Write-Host "2. Check for any broken styling" -ForegroundColor White
Write-Host "3. Adjust specific components if needed" -ForegroundColor White
Write-Host "4. Test responsive design" -ForegroundColor White
