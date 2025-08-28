# Script untuk copy halaman dari theme utama ke theme-2,3,4,5
# Penggunaan: powershell -ExecutionPolicy Bypass -File copy_pages_to_themes.ps1

Write-Host "=== SCRIPT COPY HALAMAN KE THEME-2,3,4,5 ===" -ForegroundColor Green

# Daftar halaman yang akan di-copy
$pages = @(
    "profil/visi-misi",
    "profil/tugas-wewenang", 
    "profil/organisasi",
    "profil/anggota",
    "profil/pejabat-sekretariat",
    "profil/kinerja-keuangan",
    "regulasi/peraturan-perundang-undangan",
    "regulasi/peraturan-komisi",
    "regulasi/pedoman",
    "peraturan-ketua-kppu",
    "putusan",
    "jadwal-sidang",
    "pengawasan/penelitian",
    "pengawasan/kajian-kebijakan",
    "pengawasan/advokasi",
    "penindakan/perkara-persaingan",
    "publikasi/siaran-pers",
    "publikasi/aktivitas",
    "tanya-jawab",
    "kanwil",
    "kppu-mendengar",
    "ppid",
    "indeks-persaingan-usaha",
    "advokasi",
    "kajian-kebijakan",
    "pedoman",
    "peraturan-komisi",
    "siaran-pers",
    "regulasi"
)

# Daftar theme yang akan dibuat
$themes = @("theme-2", "theme-3", "theme-4", "theme-5")

foreach ($theme in $themes) {
    Write-Host "`n=== PROCESSING $theme ===" -ForegroundColor Yellow
    
    # Buat direktori theme jika belum ada
    $themeDir = "src/app/$theme"
    if (!(Test-Path $themeDir)) {
        New-Item -ItemType Directory -Path $themeDir -Force
        Write-Host "Created directory: $themeDir" -ForegroundColor Green
    }
    
    foreach ($page in $pages) {
        $sourcePath = "src/app/$page"
        $destPath = "src/app/$theme/$page"
        
        if (Test-Path $sourcePath) {
            # Buat direktori tujuan jika belum ada
            $destDir = Split-Path $destPath -Parent
            if (!(Test-Path $destDir)) {
                New-Item -ItemType Directory -Path $destDir -Force
            }
            
            # Copy file
            Copy-Item -Path "$sourcePath/*" -Destination $destPath -Recurse -Force
            Write-Host "Copied: $page to $theme" -ForegroundColor Green
            
            # Update import paths di file yang di-copy
            $files = Get-ChildItem -Path $destPath -Recurse -Include "*.tsx", "*.ts"
            foreach ($file in $files) {
                try {
                    $content = Get-Content $file.FullName -Raw -Encoding UTF8
                    
                    # Update import paths
                    $newContent = $content -replace "from '\.\./\.\./", "from '../../../"
                    $newContent = $newContent -replace "from '\.\./", "from '../../"
                    $newContent = $newContent -replace "from '\./", "from '../"
                    
                    # Update link paths untuk theme
                    $newContent = $newContent -replace "href=`"/", "href=`"/$theme/"
                    $newContent = $newContent -replace "href=`"#", "href=`"#"
                    
                    if ($content -ne $newContent) {
                        Set-Content $file.FullName $newContent -Encoding UTF8
                        Write-Host "  Updated imports in: $($file.Name)" -ForegroundColor Cyan
                    }
                }
                catch {
                    Write-Host "  Error updating $($file.FullName): $($_.Exception.Message)" -ForegroundColor Red
                }
            }
        } else {
            Write-Host "Source not found: $sourcePath" -ForegroundColor Red
        }
    }
}

Write-Host "`n=== COPY COMPLETED ===" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review copied files" -ForegroundColor White
Write-Host "2. Update styling for each theme" -ForegroundColor White
Write-Host "3. Test navigation and links" -ForegroundColor White
Write-Host "4. Fix any broken imports" -ForegroundColor White
