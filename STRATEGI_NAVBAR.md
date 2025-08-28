# STRATEGI PENYEMPURNAAN HALAMAN NAVBAR

## 📋 OVERVIEW
Strategi untuk menyempurnakan semua halaman di menu navbar theme utama, kemudian mengcopy dan menyesuaikan styling-nya ke theme-2, 3, 4, dan 5.

## 🎯 TUJUAN
1. Menyempurnakan halaman-halaman di theme utama
2. Mengcopy halaman-halaman tersebut ke theme-2, 3, 4, 5
3. Menyesuaikan styling sesuai karakteristik masing-masing theme
4. Memastikan konsistensi navigasi dan user experience

## 📁 HALAMAN YANG AKAN DIPERBAIKI

### A. PROFIL
- Visi & Misi (`/profil/visi-misi`)
- Tugas & Wewenang (`/profil/tugas-wewenang`)
- Organisasi (`/profil/organisasi`)
- Anggota (`/profil/anggota`)
- **Pejabat Sekretariat** (`/profil/pejabat-sekretariat`) - *DETAIL SPESIFIK*
- **Kinerja & Keuangan** (`/profil/kinerja-keuangan`) - *FITUR DOWNLOAD DOKUMEN*

### B. REGULASI
- Peraturan Perundang-undangan (`/regulasi/peraturan-perundang-undangan`)
- Peraturan Komisi (`/regulasi/peraturan-komisi`)
- Peraturan Ketua KPPU (`/peraturan-ketua-kppu`)
- Pedoman (`/regulasi/pedoman`)

### C. PENGAWASAN
- Putusan (`/putusan`)
- Jadwal Sidang (`/jadwal-sidang`)
- Penelitian (`/pengawasan/penelitian`)
- Kajian Kebijakan (`/pengawasan/kajian-kebijakan`)
- Advokasi (`/pengawasan/advokasi`)

### D. PENINDAKAN
- Perkara Persaingan (`/penindakan/perkara-persaingan`)

### E. PUBLIKASI
- Siaran Pers (`/publikasi/siaran-pers`)
- Aktivitas (`/publikasi/aktivitas`)
- Tanya Jawab (`/tanya-jawab`)

### F. LAINNYA
- Kantor Wilayah (`/kanwil`)
- KPPU Mendengar (`/kppu-mendengar`)
- PPID (`/ppid`)
- Indeks Persaingan Usaha (`/indeks-persaingan-usaha`)

## 📋 DETAIL HALAMAN PEJABAT SEKRETARIAT

### Struktur Konten (Berdasarkan kppu.go.id)
**Layout:** Grid 2x3 (2 baris, 3 kolom) dengan 6 pejabat utama

#### Pejabat Sekretariat (6 orang):
1. **Lukman Sungkar, S.E., M.M.**
   - Jabatan: Plt. Sekretaris Jenderal
   - Foto: Pria dengan jas hitam, kemeja putih, dasi hitam, peci hitam

2. **Taufik Ariyanto Arsad, S.E., M.E.**
   - Jabatan: Deputi Bidang Kajian dan Advokasi
   - Foto: Pria dengan rambut beruban, jas hitam, dasi biru tua bermotif

3. **Setyabudi Yulianto, S.H.**
   - Jabatan: Deputi Bidang Penegakan Hukum
   - Foto: Pria dengan jas hitam, dasi biru tua bermotif

4. **Daniel Agustino, S.E., M.P.P.**
   - Jabatan: Staf Ahli Unsur Pembantu Komisi Bidang Ekonomi
   - Foto: Pria berkacamata, jas hitam, dasi biru bermotif

5. **Andi Zubaida Assaf, S.T.P., M.Si.**
   - Jabatan: Kepala Biro Perencanaan dan Keuangan
   - Foto: Wanita dengan hijab merah muda/ungu, atasan gelap, tersenyum

6. **Manaek SM Pasaribu, S.H., LL.M.**
   - Jabatan: Kepala Biro Hukum
   - Foto: Pria dengan peci hitam, jas hitam, dasi merah

#### Pejabat Kantor Wilayah (6 orang):
1. **Ridho Pamungkas, S.I.P.**
   - Jabatan: Kepala Kantor Wilayah I di Medan
   - Foto: Pria dengan jas abu-abu, dasi biru tua

2. **Wahyu Bekti Anggoro, S.H., M.H.**
   - Jabatan: Kepala Kantor Wilayah II di Lampung
   - Foto: Pria berkacamata, jas hitam, kemeja putih, tersenyum lebar

3. **Lina Rosmiati, S.P., M.E.**
   - Jabatan: Kepala Kantor Wilayah III di Bandung
   - Foto: Wanita dengan hijab merah muda terang, kacamata, blazer hitam

4. **Dyah Paramita, S.I.Kom., M.Si**
   - Jabatan: Plt. Kepala Kantor Wilayah IV di Surabaya
   - Foto: Wanita dengan hijab hitam, ciput putih, atasan putih, blazer hitam

5. **FY Andriyanto, S.E., M.Si.**
   - Jabatan: Kepala Kantor Wilayah V di Samarinda
   - Foto: Pria dengan kulit sawo matang, jas hitam, peci hitam

6. **Charisma Desta Ardiansyah, S.Sos.**
   - Jabatan: Plt. Kepala Kantor Wilayah VI di Makassar
   - Foto: Pria dengan kemeja putih, dasi merah bermotif

7. **M. Hendry Setyawan, S.E., S.Si., M.S.M.**
   - Jabatan: Kepala Kantor Wilayah VII di Yogyakarta
   - Foto: Pria berkacamata, jas hitam, dasi biru tua, peci hitam

### Komponen UI yang Diperlukan:
- **Card Profile:** Foto + Nama + Gelar + Jabatan + Lokasi (jika ada)
- **Grid Layout:** Responsive 2x3 untuk desktop, 1 kolom untuk mobile
- **Sidebar Navigation:** Menu navigasi di sebelah kanan
- **Social Media Icons:** Facebook, Twitter, WhatsApp, Telegram, LINE
- **Footer:** Logo KPPU + search bar + social media links

## 📋 DETAIL HALAMAN KINERJA & KEUANGAN

### Struktur Konten
**Layout:** Grid cards dengan fitur download dokumen

#### Dokumen Keuangan yang Tersedia:
1. **Laporan Kinerja (LKjIP)**
   - Format: PDF
   - Tahun: 2023, 2022, 2021, 2020
   - Ukuran file: ~2-5 MB
   - Icon: 📊

2. **Rencana Kerja & Anggaran (RKA-KL)**
   - Format: PDF
   - Tahun: 2024, 2023, 2022, 2021
   - Ukuran file: ~1-3 MB
   - Icon: 📋

3. **Laporan Tahunan**
   - Format: PDF
   - Tahun: 2023, 2022, 2021, 2020
   - Ukuran file: ~3-8 MB
   - Icon: 📈

### Komponen UI yang Diperlukan:
- **Document Cards:** Icon + Judul + Tahun + Ukuran file + Download button
- **Filter by Year:** Dropdown untuk filter berdasarkan tahun
- **Search Function:** Pencarian dokumen berdasarkan judul
- **Download Progress:** Progress bar saat download
- **File Preview:** Preview dokumen sebelum download (opsional)
- **Download History:** Riwayat dokumen yang sudah di-download (opsional)

### Fitur Download:
- **Direct Download:** Download langsung ke device
- **Download Queue:** Antrian download untuk multiple files
- **Resume Download:** Lanjutkan download yang terputus
- **Download Speed:** Tampilkan kecepatan download
- **File Validation:** Validasi file setelah download

## 🎨 KARAKTERISTIK THEME

### THEME UTAMA
- Warna: Biru (#0066CC)
- Style: Clean, professional, government-like
- **Pejabat Sekretariat:** Grid 2x3, background putih, teks hitam
- **Kinerja & Keuangan:** Cards dengan download button biru

### THEME-2
- Warna: Cyan/Hijau (#006666)
- Style: Modern, tech-focused
- **Pejabat Sekretariat:** Grid 2x3, background gelap dengan accent cyan
- **Kinerja & Keuangan:** Cards dengan download button cyan

### THEME-3
- Warna: Purple (#421BBC)
- Style: Elegant, sophisticated
- **Pejabat Sekretariat:** Grid 2x3, background gradient purple
- **Kinerja & Keuangan:** Cards dengan download button purple

### THEME-4
- Warna: Red (#dc2626) + Dark Blue (#1e3a8a)
- Style: Bold, dynamic, modern
- **Pejabat Sekretariat:** Grid 3x3 (sesuai permintaan sebelumnya), background dynamic light/dark
- **Kinerja & Keuangan:** Cards dengan download button red/dark blue

### THEME-5
- Warna: Orange (#FF6B35)
- Style: Energetic, vibrant
- **Pejabat Sekretariat:** Grid 2x3, background gelap dengan accent orange
- **Kinerja & Keuangan:** Cards dengan download button orange

## 📝 STEP-BY-STEP STRATEGI

### FASE 1: AUDIT HALAMAN UTAMA (2-3 hari)
1. Review semua halaman di theme utama
2. Identifikasi halaman yang perlu perbaikan
3. Buat checklist perbaikan
4. Buat template standar
5. **Khusus Pejabat Sekretariat:** Implementasi grid layout dengan data dari kppu.go.id
6. **Khusus Kinerja & Keuangan:** Implementasi fitur download dokumen

### FASE 2: PENYEMPURNAAN HALAMAN UTAMA (5-7 hari)
1. Perbaikan halaman profil
   - **Pejabat Sekretariat:** Implementasi grid 2x3 dengan 13 pejabat (6 sekretariat + 7 kantor wilayah)
   - **Kinerja & Keuangan:** Implementasi fitur download dokumen dengan 3 kategori dokumen
2. Perbaikan halaman regulasi
3. Perbaikan halaman pengawasan
4. Perbaikan halaman penindakan
5. Perbaikan halaman publikasi
6. Perbaikan halaman lainnya

### FASE 3: COPY KE THEME-2 (3-4 hari)
1. Setup struktur theme-2
2. Copy semua halaman
3. Adaptasi styling ke cyan/hijau
4. **Pejabat Sekretariat:** Adaptasi ke grid 2x3 dengan styling cyan
5. **Kinerja & Keuangan:** Adaptasi download button ke styling cyan
6. Testing

### FASE 4: COPY KE THEME-3 (3-4 hari)
1. Setup struktur theme-3
2. Copy semua halaman
3. Adaptasi styling ke purple
4. **Pejabat Sekretariat:** Adaptasi ke grid 2x3 dengan styling purple
5. **Kinerja & Keuangan:** Adaptasi download button ke styling purple
6. Testing

### FASE 5: COPY KE THEME-4 (3-4 hari)
1. Setup struktur theme-4
2. Copy semua halaman
3. Adaptasi styling ke red/dark blue
4. **Pejabat Sekretariat:** Adaptasi ke grid 3x3 dengan styling red/dark blue
5. **Kinerja & Keuangan:** Adaptasi download button ke styling red/dark blue
6. Testing

### FASE 6: COPY KE THEME-5 (3-4 hari)
1. Setup struktur theme-5
2. Copy semua halaman
3. Adaptasi styling ke orange
4. **Pejabat Sekretariat:** Adaptasi ke grid 2x3 dengan styling orange
5. **Kinerja & Keuangan:** Adaptasi download button ke styling orange
6. Testing

### FASE 7: FINAL TESTING (2-3 hari)
1. Cross-theme testing
2. Performance optimization
3. Content review
4. Final polish

## 🛠️ TOOLS
- Next.js 15.3.3
- TypeScript
- Tailwind CSS
- Framer Motion
- PowerShell Scripts
- Git
- **File Download Libraries:** js-file-download, file-saver

## 📊 SUCCESS METRICS
- Semua halaman load < 3 detik
- Lighthouse score > 90
- Zero broken links
- Responsive di semua device
- Accessibility score > 95
- **Download success rate > 95%**

## 📅 TIMELINE
**Total: 21-28 hari**

## ✅ CHECKLIST PER HALAMAN
- [ ] Content review
- [ ] Layout optimization
- [ ] Responsive design
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility compliance
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Link validation
- [ ] Image optimization

## ✅ CHECKLIST KHUSUS PEJABAT SEKRETARIAT
- [ ] Implementasi grid layout 2x3 (theme utama, 2, 3, 5) / 3x3 (theme-4)
- [ ] Data 13 pejabat lengkap (6 sekretariat + 7 kantor wilayah)
- [ ] Foto profil profesional untuk setiap pejabat
- [ ] Nama lengkap dengan gelar akademik
- [ ] Jabatan dan lokasi kantor (jika ada)
- [ ] Sidebar navigation
- [ ] Social media icons
- [ ] Responsive design untuk mobile
- [ ] Loading state untuk gambar
- [ ] Error handling untuk gambar yang tidak load

## ✅ CHECKLIST KHUSUS KINERJA & KEUANGAN
- [ ] Implementasi document cards dengan download button
- [ ] 3 kategori dokumen: LKjIP, RKA-KL, Laporan Tahunan
- [ ] Filter berdasarkan tahun (2020-2024)
- [ ] Search function untuk dokumen
- [ ] Download progress indicator
- [ ] File size display
- [ ] Download history tracking
- [ ] Error handling untuk download gagal
- [ ] Mobile-friendly download interface
- [ ] Accessibility untuk screen readers

## 📈 PROGRESS UPDATE

### ✅ FASE 1: AUDIT HALAMAN UTAMA (COMPLETED)
- ✅ **Pejabat Sekretariat** - Implementasi lengkap dengan data 6 pejabat sekretariat + 7 pejabat regional
- ✅ **Logo dan Maskot** - Implementasi lengkap dengan filosofi, gambar, dan video Kompid YouTube
- ⏳ **Kinerja Keuangan** - Perlu tambahan fitur download dokumen
- ⏳ Halaman lainnya - Belum diaudit

### ✅ FASE 2: COPY KE THEME-2,3,4,5 (COMPLETED)
- ✅ Semua halaman navbar berhasil di-copy ke theme-2, 3, 4, 5
- ✅ Import paths berhasil diupdate secara otomatis
- ✅ Styling adaptasi berhasil diterapkan sesuai karakteristik masing-masing theme

### 🎯 NEXT STEPS
1. **FASE 3**: Implementasi fitur download di halaman Kinerja Keuangan
2. **FASE 4**: Audit dan perbaikan halaman navbar lainnya
3. **FASE 5**: Testing dan quality assurance
