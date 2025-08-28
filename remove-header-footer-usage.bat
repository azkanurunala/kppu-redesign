@echo off
echo Removing Header and Footer component usage from theme-2 pages...

REM Remove Header and Footer component usage from all theme-2 pages
powershell -Command "(Get-Content 'src\app\theme-2\advokasi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\advokasi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\advokasi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\advokasi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\anggota\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\anggota\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\anggota\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\anggota\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\indeks-persaingan-usaha\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\indeks-persaingan-usaha\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\indeks-persaingan-usaha\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\indeks-persaingan-usaha\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\jadwal-sidang\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\jadwal-sidang\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\jadwal-sidang\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\jadwal-sidang\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\kanwil\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\kanwil\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\kanwil\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\kanwil\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\kppu-mendengar\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\kppu-mendengar\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\kppu-mendengar\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\kppu-mendengar\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\mitra-kerja\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\mitra-kerja\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\mitra-kerja\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\mitra-kerja\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\logo-dan-maskot\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\logo-dan-maskot\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\logo-dan-maskot\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\logo-dan-maskot\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\penelitian\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\penelitian\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\penelitian\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\penelitian\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\pedoman\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\pedoman\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\pedoman\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\pedoman\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\peraturan-ketua-kppu\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\peraturan-ketua-kppu\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\peraturan-ketua-kppu\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\peraturan-ketua-kppu\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\peraturan-komisi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\peraturan-komisi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\peraturan-komisi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\peraturan-komisi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\ppid\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\ppid\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\ppid\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\ppid\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\putusan\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\putusan\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\putusan\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\putusan\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\siaran-pers\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\siaran-pers\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\siaran-pers\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\siaran-pers\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\tanya-jawab\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\tanya-jawab\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\tanya-jawab\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\tanya-jawab\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\visi-misi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\visi-misi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\visi-misi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\visi-misi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\penindakan\perkara-persaingan\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\penindakan\perkara-persaingan\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\penindakan\perkara-persaingan\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\penindakan\perkara-persaingan\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\regulasi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\regulasi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\regulasi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\regulasi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\regulasi\pedoman\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\regulasi\pedoman\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\regulasi\pedoman\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\regulasi\pedoman\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\regulasi\peraturan-komisi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\regulasi\peraturan-komisi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\regulasi\peraturan-komisi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\regulasi\peraturan-komisi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\regulasi\peraturan-perundang-undangan\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\regulasi\peraturan-perundang-undangan\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\regulasi\peraturan-perundang-undangan\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\regulasi\peraturan-perundang-undangan\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\publikasi\siaran-pers\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\publikasi\siaran-pers\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\publikasi\siaran-pers\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\publikasi\siaran-pers\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\pengawasan\advokasi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\pengawasan\advokasi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\pengawasan\advokasi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\pengawasan\advokasi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\pengawasan\kajian-kebijakan\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\pengawasan\kajian-kebijakan\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\pengawasan\kajian-kebijakan\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\pengawasan\kajian-kebijakan\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\pengawasan\penelitian\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\pengawasan\penelitian\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\pengawasan\penelitian\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\pengawasan\penelitian\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\anggota\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\anggota\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\anggota\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\anggota\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\kinerja-keuangan\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\kinerja-keuangan\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\kinerja-keuangan\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\kinerja-keuangan\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\logo-dan-maskot\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\logo-dan-maskot\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\logo-dan-maskot\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\logo-dan-maskot\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\mitra-kerja\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\mitra-kerja\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\mitra-kerja\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\mitra-kerja\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\organisasi\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\organisasi\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\organisasi\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\organisasi\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\pejabat-sekretariat\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\pejabat-sekretariat\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\pejabat-sekretariat\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\pejabat-sekretariat\page.tsx'"

powershell -Command "(Get-Content 'src\app\theme-2\profil\tugas-wewenang\page.tsx') -replace '      <Header />', '' | Set-Content 'src\app\theme-2\profil\tugas-wewenang\page.tsx'"
powershell -Command "(Get-Content 'src\app\theme-2\profil\tugas-wewenang\page.tsx') -replace '      <Footer />', '' | Set-Content 'src\app\theme-2\profil\tugas-wewenang\page.tsx'"

echo Removal completed!
pause
