# Script untuk memperbaiki error JSX di file-file yang bermasalah

$files = @(
    "src/app/kppu-mendengar/page.tsx",
    "src/app/mitra-kerja/page.tsx", 
    "src/app/pedoman/page.tsx",
    "src/app/penelitian/page.tsx",
    "src/app/pengawasan/advokasi/page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Memperbaiki $file..."
        
        # Baca konten file
        $content = Get-Content $file -Raw
        
        # Perbaiki masalah yang umum terjadi:
        
        # 1. Hapus duplikasi "relative overflow-hidden"
        $content = $content -replace 'relative overflow-hidden relative overflow-hidden', 'relative overflow-hidden'
        
        # 2. Hapus duplikasi "overflow-x-hidden" di className
        $content = $content -replace 'overflow-x-hidden overflow-x-hidden', 'overflow-x-hidden'
        
        # 3. Pastikan struktur JSX yang benar
        $content = $content -replace 'overflow-x-hidd\s*en', 'overflow-x-hidden'
        
        # 4. Perbaiki tag yang tidak tertutup dengan benar
        $content = $content -replace '(\s*)</div>\s*</div>\s*</section>', '$1</div></div></section>'
        
        # 5. Pastikan tidak ada tag yang berlebihan
        $content = $content -replace '(\s*)</div>\s*</div>\s*</div>\s*</section>', '$1</div></div></section>'
        
        # Tulis kembali ke file
        Set-Content $file $content -Encoding UTF8
        Write-Host "✓ $file diperbaiki"
    } else {
        Write-Host "✗ File $file tidak ditemukan"
    }
}

Write-Host "Selesai memperbaiki semua file!"
