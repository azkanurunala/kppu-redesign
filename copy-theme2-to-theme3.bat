@echo off
echo Copying all pages from theme-2 to theme-3...

REM Create directories first
mkdir src\app\theme-3\advokasi 2>nul
mkdir src\app\theme-3\anggota 2>nul
mkdir src\app\theme-3\indeks-persaingan-usaha 2>nul
mkdir src\app\theme-3\jadwal-sidang 2>nul
mkdir src\app\theme-3\kanwil 2>nul
mkdir src\app\theme-3\kppu-mendengar 2>nul
mkdir src\app\theme-3\mitra-kerja 2>nul
mkdir src\app\theme-3\logo-dan-maskot 2>nul
mkdir src\app\theme-3\penelitian 2>nul
mkdir src\app\theme-3\pedoman 2>nul
mkdir src\app\theme-3\peraturan-ketua-kppu 2>nul
mkdir src\app\theme-3\peraturan-komisi 2>nul
mkdir src\app\theme-3\ppid 2>nul
mkdir src\app\theme-3\putusan 2>nul
mkdir src\app\theme-3\siaran-pers 2>nul
mkdir src\app\theme-3\tanya-jawab 2>nul
mkdir src\app\theme-3\visi-misi 2>nul
mkdir src\app\theme-3\penindakan\perkara-persaingan 2>nul
mkdir src\app\theme-3\regulasi 2>nul
mkdir src\app\theme-3\regulasi\pedoman 2>nul
mkdir src\app\theme-3\regulasi\peraturan-komisi 2>nul
mkdir src\app\theme-3\regulasi\peraturan-perundang-undangan 2>nul
mkdir src\app\theme-3\publikasi\siaran-pers 2>nul
mkdir src\app\theme-3\pengawasan\advokasi 2>nul
mkdir src\app\theme-3\pengawasan\kajian-kebijakan 2>nul
mkdir src\app\theme-3\pengawasan\penelitian 2>nul
mkdir src\app\theme-3\profil\anggota 2>nul
mkdir src\app\theme-3\profil\kinerja-keuangan 2>nul
mkdir src\app\theme-3\profil\logo-maskot 2>nul
mkdir src\app\theme-3\profil\mitra-kerja 2>nul
mkdir src\app\theme-3\profil\organisasi 2>nul
mkdir src\app\theme-3\profil\pejabat-sekretariat 2>nul
mkdir src\app\theme-3\profil\tugas-wewenang 2>nul

REM Copy all page.tsx files from theme-2 to theme-3
copy "src\app\theme-2\advokasi\page.tsx" "src\app\theme-3\advokasi\page.tsx"
copy "src\app\theme-2\anggota\page.tsx" "src\app\theme-3\anggota\page.tsx"
copy "src\app\theme-2\indeks-persaingan-usaha\page.tsx" "src\app\theme-3\indeks-persaingan-usaha\page.tsx"
copy "src\app\theme-2\jadwal-sidang\page.tsx" "src\app\theme-3\jadwal-sidang\page.tsx"
copy "src\app\theme-2\kanwil\page.tsx" "src\app\theme-3\kanwil\page.tsx"
copy "src\app\theme-2\kppu-mendengar\page.tsx" "src\app\theme-3\kppu-mendengar\page.tsx"
copy "src\app\theme-2\mitra-kerja\page.tsx" "src\app\theme-3\mitra-kerja\page.tsx"
copy "src\app\theme-2\logo-dan-maskot\page.tsx" "src\app\theme-3\logo-dan-maskot\page.tsx"
copy "src\app\theme-2\penelitian\page.tsx" "src\app\theme-3\penelitian\page.tsx"
copy "src\app\theme-2\pedoman\page.tsx" "src\app\theme-3\pedoman\page.tsx"
copy "src\app\theme-2\peraturan-ketua-kppu\page.tsx" "src\app\theme-3\peraturan-ketua-kppu\page.tsx"
copy "src\app\theme-2\peraturan-komisi\page.tsx" "src\app\theme-3\peraturan-komisi\page.tsx"
copy "src\app\theme-2\ppid\page.tsx" "src\app\theme-3\ppid\page.tsx"
copy "src\app\theme-2\putusan\page.tsx" "src\app\theme-3\putusan\page.tsx"
copy "src\app\theme-2\siaran-pers\page.tsx" "src\app\theme-3\siaran-pers\page.tsx"
copy "src\app\theme-2\tanya-jawab\page.tsx" "src\app\theme-3\tanya-jawab\page.tsx"
copy "src\app\theme-2\visi-misi\page.tsx" "src\app\theme-3\visi-misi\page.tsx"
copy "src\app\theme-2\penindakan\perkara-persaingan\page.tsx" "src\app\theme-3\penindakan\perkara-persaingan\page.tsx"
copy "src\app\theme-2\regulasi\page.tsx" "src\app\theme-3\regulasi\page.tsx"
copy "src\app\theme-2\regulasi\pedoman\page.tsx" "src\app\theme-3\regulasi\pedoman\page.tsx"
copy "src\app\theme-2\regulasi\peraturan-komisi\page.tsx" "src\app\theme-3\regulasi\peraturan-komisi\page.tsx"
copy "src\app\theme-2\regulasi\peraturan-perundang-undangan\page.tsx" "src\app\theme-3\regulasi\peraturan-perundang-undangan\page.tsx"
copy "src\app\theme-2\publikasi\siaran-pers\page.tsx" "src\app\theme-3\publikasi\siaran-pers\page.tsx"
copy "src\app\theme-2\pengawasan\advokasi\page.tsx" "src\app\theme-3\pengawasan\advokasi\page.tsx"
copy "src\app\theme-2\pengawasan\kajian-kebijakan\page.tsx" "src\app\theme-3\pengawasan\kajian-kebijakan\page.tsx"
copy "src\app\theme-2\pengawasan\penelitian\page.tsx" "src\app\theme-3\pengawasan\penelitian\page.tsx"
copy "src\app\theme-2\profil\anggota\page.tsx" "src\app\theme-3\profil\anggota\page.tsx"
copy "src\app\theme-2\profil\kinerja-keuangan\page.tsx" "src\app\theme-3\profil\kinerja-keuangan\page.tsx"
copy "src\app\theme-2\profil\logo-maskot\page.tsx" "src\app\theme-3\profil\logo-maskot\page.tsx"
copy "src\app\theme-2\profil\mitra-kerja\page.tsx" "src\app\theme-3\profil\mitra-kerja\page.tsx"
copy "src\app\theme-2\profil\organisasi\page.tsx" "src\app\theme-3\profil\organisasi\page.tsx"
copy "src\app\theme-2\profil\pejabat-sekretariat\page.tsx" "src\app\theme-3\profil\pejabat-sekretariat\page.tsx"
copy "src\app\theme-2\profil\tugas-wewenang\page.tsx" "src\app\theme-3\profil\tugas-wewenang\page.tsx"

echo Copy completed!
pause
