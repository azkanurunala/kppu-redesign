# 🎨 THEME 2 STRATEGY - TURQUOISE MODERN LAYOUT

## 📋 OVERVIEW
Membuat theme kedua dengan warna utama **#1B425F (Turquoise)** dan layout yang benar-benar berbeda namun dengan konten yang sama persis. Theme ini akan memiliki pendekatan desain yang lebih modern, minimalis, dan elegan.

---

## 🎯 KONSEP DESAIN

### **Theme Identity: "OCEAN MODERN"**
- **Warna Utama:** #1B425F (Deep Turquoise)
- **Warna Sekunder:** #2A5F7A (Light Turquoise)
- **Warna Aksen:** #00D4AA (Bright Turquoise)
- **Warna Netral:** #F8FAFC (Light Gray), #1E293B (Dark Gray)
- **Gradient:** Linear gradients dengan turquoise tones

### **Layout Philosophy:**
- **Asymmetrical Grid System** (berbeda dengan symmetrical grid theme 1)
- **Card-based Design** dengan rounded corners yang lebih besar
- **Floating Elements** dengan shadow yang lebih dramatis
- **Sidebar Navigation** (berbeda dengan top navigation theme 1)
- **Hero Section** dengan split layout (text + visual)

---

## 🏗️ STRUKTUR FOLDER

```
src/app/theme-2/
├── page.tsx (Homepage)
├── layout.tsx (Theme 2 Layout)
├── globals.css (Theme 2 Styles)
├── components/
│   ├── header.tsx (Sidebar Navigation)
│   ├── footer.tsx
│   └── ui/ (Theme 2 specific components)
├── profil/
│   ├── page.tsx
│   ├── visi-misi/
│   ├── anggota/
│   ├── organisasi/
│   ├── kinerja-keuangan/
│   ├── pejabat-sekretariat/
│   ├── tugas-wewenang/
│   └── mitra-kerja/
├── pengawasan/
│   ├── advokasi/
│   ├── kajian-kebijakan/
│   └── penelitian/
├── advokasi/
│   └── page.tsx
├── putusan/
│   └── page.tsx
├── regulasi/
│   ├── page.tsx
│   └── peraturan-perundang-undangan/
├── publikasi/
│   └── siaran-pers/
├── siaran-pers/
│   └── page.tsx
├── jadwal-sidang/
│   └── page.tsx
├── kajian-kebijakan/
│   └── page.tsx
├── penelitian/
│   └── page.tsx
├── indeks-persaingan-usaha/
│   └── page.tsx
├── peraturan-komisi/
│   └── page.tsx
├── peraturan-ketua-kppu/
│   └── page.tsx
├── pedoman/
│   └── page.tsx
├── logo-dan-maskot/
│   └── page.tsx
├── kppu-mendengar/
│   └── page.tsx
├── tanya-jawab/
│   └── page.tsx
├── ppid/
│   └── page.tsx
└── kanwil/
    └── page.tsx
```

---

## 🎨 DESIGN SYSTEM

### **Typography:**
- **Heading:** Inter (lebih modern dari Poppins)
- **Body:** Inter
- **Display:** Inter Extra Bold
- **Monospace:** JetBrains Mono (untuk kode/angka)

### **Spacing System:**
- **Base:** 4px
- **Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

### **Border Radius:**
- **Small:** 8px
- **Medium:** 16px
- **Large:** 24px
- **Extra Large:** 32px

### **Shadows:**
- **Small:** 0 2px 8px rgba(27, 66, 95, 0.1)
- **Medium:** 0 8px 32px rgba(27, 66, 95, 0.15)
- **Large:** 0 16px 64px rgba(27, 66, 95, 0.2)

---

## 🏠 HOMEPAGE LAYOUT (theme-2/page.tsx)

### **Hero Section - Split Layout:**
```
┌─────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐   │
│  │    TEXT     │  │   VISUAL    │   │
│  │             │  │             │   │
│  │  Heading    │  │  Animated   │   │
│  │  Subtitle   │  │  Elements   │   │
│  │  Search     │  │             │   │
│  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────┘
```

### **Features:**
- **Left Side:** Text content dengan gradient background
- **Right Side:** Animated geometric shapes dengan turquoise theme
- **Search Bar:** Floating card dengan glassmorphism effect
- **Navigation:** Minimal floating menu

### **Sections:**
1. **Hero** (Split Layout)
2. **Stats** (Horizontal cards dengan hover effects)
3. **Services** (Grid dengan card-based design)
4. **News** (Timeline layout)
5. **Contact** (Floating contact form)

---

## 🧭 NAVIGATION SYSTEM

### **Sidebar Navigation (theme-2/components/header.tsx):**
```
┌─────────────────┐
│       LOGO      │
├─────────────────┤
│   Beranda       │
│   Profil        │
│   Pengawasan    │
│   Advokasi      │
│   Putusan       │
│   Regulasi      │
│   Publikasi     │
│   Layanan       │
│   Kontak        │
├─────────────────┤
│   Search Icon   │
│   Theme Toggle  │
└─────────────────┘
```

### **Features:**
- **Collapsible Sidebar** dengan smooth animation
- **Active State** dengan gradient background
- **Hover Effects** dengan scale transform
- **Search Integration** dengan floating search modal
- **Theme Toggle** untuk switch ke theme 1

---

## 📄 PAGE LAYOUTS

### **Standard Page Structure:**
```
┌─────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐   │
│  │   SIDEBAR   │  │    MAIN     │   │
│  │             │  │             │   │
│  │ Navigation  │  │   Header    │   │
│  │             │  │   Content   │   │
│  │             │  │   Footer    │   │
│  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────┘
```

### **Header Section:**
- **Breadcrumb** dengan floating design
- **Page Title** dengan gradient text
- **Action Buttons** dengan floating style

### **Content Area:**
- **Card-based Layout** untuk semua content
- **Asymmetrical Grid** untuk visual interest
- **Floating Elements** dengan shadows

---

## 🎭 COMPONENT DESIGNS

### **Cards:**
- **Rounded Corners:** 16px-24px
- **Glassmorphism Effect** dengan backdrop blur
- **Hover Animations:** Scale + shadow increase
- **Gradient Borders** dengan turquoise theme

### **Buttons:**
- **Primary:** Gradient background (#1B425F → #2A5F7A)
- **Secondary:** Transparent dengan border
- **Floating:** Shadow + hover lift effect

### **Forms:**
- **Floating Labels** dengan smooth animations
- **Gradient Focus States** dengan turquoise
- **Validation States** dengan color coding

### **Tables:**
- **Card-based Rows** dengan hover effects
- **Sticky Headers** dengan glassmorphism
- **Pagination** dengan floating design

---

## 🌊 ANIMATIONS & INTERACTIONS

### **Page Transitions:**
- **Fade In/Out** dengan staggered children
- **Slide Transitions** untuk sidebar
- **Scale Animations** untuk cards

### **Hover Effects:**
- **Card Lift** dengan shadow increase
- **Button Scale** dengan gradient shift
- **Text Glow** untuk important elements

### **Loading States:**
- **Skeleton Cards** dengan turquoise shimmer
- **Progress Bars** dengan gradient animation
- **Spinners** dengan geometric shapes

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints:**
- **Mobile:** < 768px (Stacked layout)
- **Tablet:** 768px - 1024px (Sidebar collapse)
- **Desktop:** > 1024px (Full sidebar)

### **Mobile Adaptations:**
- **Bottom Navigation** sebagai pengganti sidebar
- **Full-width Cards** tanpa margins
- **Simplified Animations** untuk performance

---

## 🎨 COLOR PALETTE

### **Primary Colors:**
```css
--primary-50: #f0f9ff
--primary-100: #e0f2fe
--primary-200: #bae6fd
--primary-300: #7dd3fc
--primary-400: #38bdf8
--primary-500: #1B425F  /* Main Color */
--primary-600: #2A5F7A
--primary-700: #0369a1
--primary-800: #075985
--primary-900: #0c4a6e
```

### **Accent Colors:**
```css
--accent-500: #00D4AA  /* Bright Turquoise */
--accent-400: #00E6B8
--accent-300: #00F7C7
```

### **Neutral Colors:**
```css
--gray-50: #f8fafc
--gray-100: #f1f5f9
--gray-200: #e2e8f0
--gray-800: #1e293b
--gray-900: #0f172a
```

---

## 🔧 TECHNICAL IMPLEMENTATION

### **CSS Architecture:**
- **CSS Modules** untuk component-specific styles
- **CSS Custom Properties** untuk theming
- **Utility Classes** untuk common patterns

### **State Management:**
- **Context API** untuk theme switching
- **Local Storage** untuk user preferences
- **URL Parameters** untuk deep linking

### **Performance:**
- **Lazy Loading** untuk images dan components
- **Code Splitting** per route
- **Optimized Animations** dengan CSS transforms

---

## 📋 IMPLEMENTATION PHASES

### **Phase 1: Foundation (Week 1)**
1. ✅ Setup folder structure
2. ✅ Create base layout components
3. ✅ Implement color system
4. ✅ Setup navigation system

### **Phase 2: Core Pages (Week 2)**
1. ✅ Homepage dengan split layout
2. ✅ Profil pages dengan card design
3. ✅ Pengawasan pages
4. ✅ Basic responsive design

### **Phase 3: Advanced Features (Week 3)**
1. ✅ Animations dan interactions
2. ✅ Advanced components
3. ✅ Performance optimization
4. ✅ Cross-browser testing

### **Phase 4: Polish & Launch (Week 4)**
1. ✅ Final design refinements
2. ✅ Accessibility improvements
3. ✅ SEO optimization
4. ✅ Documentation

---

## 🎯 SUCCESS METRICS

### **Design Goals:**
- **100% Content Parity** dengan theme 1
- **Unique Visual Identity** yang berbeda
- **Modern User Experience** dengan smooth interactions
- **Performance Score** > 90 pada Lighthouse

### **Technical Goals:**
- **Zero Conflicts** dengan theme 1
- **Modular Architecture** untuk easy maintenance
- **Responsive Design** di semua devices
- **Accessibility Compliance** WCAG 2.1 AA

---

## 🚀 READY TO EXECUTE!

Dokumen strategi ini memberikan roadmap yang jelas untuk implementasi theme 2. Setiap komponen dan halaman telah direncanakan dengan detail, memastikan hasil yang konsisten dan profesional.

**Next Step:** Mulai implementasi sesuai dengan fase yang telah direncanakan! 🎨✨

