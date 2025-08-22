'use client';

import { motion } from 'framer-motion';
import { Users, Building, ChartBar, FileText, Award, Globe, ChevronRight } from 'lucide-react';

export default function Theme2ProfilPage() {
  const profileSections = [
    {
      icon: Users,
      title: "Visi & Misi",
      description: "Panduan dan arah strategis KPPU dalam mengawasi persaingan usaha",
      href: "/theme-2/profil/visi-misi",
      color: "from-[#1B425F] to-[#2A5F7A]"
    },
    {
      icon: Building,
      title: "Organisasi",
      description: "Struktur organisasi dan tata kelola internal KPPU",
      href: "/theme-2/profil/organisasi",
      color: "from-[#00D4AA] to-[#00E6B8]"
    },
    {
      icon: Users,
      title: "Anggota",
      description: "Profil dan informasi lengkap anggota komisi KPPU",
      href: "/theme-2/profil/anggota",
      color: "from-[#1B425F] to-[#2A5F7A]"
    },
    {
      icon: ChartBar,
      title: "Kinerja & Keuangan",
      description: "Laporan kinerja dan transparansi keuangan KPPU",
      href: "/theme-2/profil/kinerja-keuangan",
      color: "from-[#00D4AA] to-[#00E6B8]"
    },
    {
      icon: FileText,
      title: "Tugas & Wewenang",
      description: "Tugas pokok dan kewenangan KPPU berdasarkan undang-undang",
      href: "/theme-2/profil/tugas-wewenang",
      color: "from-[#1B425F] to-[#2A5F7A]"
    },
    {
      icon: Globe,
      title: "Mitra Kerja",
      description: "Jaringan kerjasama dan mitra strategis KPPU",
      href: "/theme-2/profil/mitra-kerja",
      color: "from-[#00D4AA] to-[#00E6B8]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#1B425F] to-[#2A5F7A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B425F]/10 to-[#00D4AA]/10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Profil KPPU
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Komisi Pengawas Persaingan Usaha (KPPU) adalah lembaga independen yang bertugas mengawasi dan memastikan persaingan usaha yang sehat di Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/theme-2" className="hover:text-[#1B425F] transition-colors">Beranda</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1B425F] font-medium">Profil</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B425F] mb-4">
              Kenali KPPU Lebih Dekat
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi berbagai aspek profil KPPU untuk memahami lebih dalam tentang lembaga pengawas persaingan usaha ini.
            </p>
          </motion.div>

          {/* Profile Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <a href={section.href} className="block">
                  <div className="card-modern floating-card h-full group-hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1B425F] mb-3 group-hover:text-[#00D4AA] transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {section.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-end">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1B425F] to-[#2A5F7A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-[#1B425F] to-[#2A5F7A] rounded-3xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Tentang KPPU
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    KPPU didirikan berdasarkan Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktik Monopoli dan Persaingan Usaha Tidak Sehat. 
                    Sebagai lembaga independen, KPPU berkomitmen untuk menciptakan iklim persaingan usaha yang sehat dan adil di Indonesia.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00D4AA]">25+</div>
                      <div className="text-sm text-white/80">Tahun Pengalaman</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00D4AA]">500+</div>
                      <div className="text-sm text-white/80">Putusan Dikeluarkan</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-xl font-semibold mb-4">Nilai-Nilai KPPU</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                        <span>Independensi dan Objektivitas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                        <span>Transparansi dan Akuntabilitas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                        <span>Profesionalisme dan Integritas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#00D4AA] rounded-full"></div>
                        <span>Keadilan dan Kepastian Hukum</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

