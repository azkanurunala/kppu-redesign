'use client';

import { motion } from 'framer-motion';
import { Target, Eye, ChevronRight, Award, Users, Globe } from 'lucide-react';

export default function Theme2VisiMisiPage() {
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
              Visi & Misi KPPU
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Panduan dan arah strategis Komisi Pengawas Persaingan Usaha dalam mengawasi dan memastikan persaingan usaha yang sehat di Indonesia.
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
            <a href="/theme-2/profil" className="hover:text-[#1B425F] transition-colors">Profil</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1B425F] font-medium">Visi & Misi</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1B425F] to-[#2A5F7A] rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1B425F]">Visi</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  "Menjadi lembaga pengawas persaingan usaha yang terpercaya dalam menciptakan iklim persaingan usaha yang sehat dan adil untuk mendukung pertumbuhan ekonomi yang berkelanjutan."
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00D4AA] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Terpercaya dalam pengawasan persaingan usaha</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00D4AA] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Menciptakan iklim persaingan yang sehat dan adil</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00D4AA] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Mendukung pertumbuhan ekonomi berkelanjutan</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1B425F] to-[#2A5F7A] rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Indikator Keberhasilan</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D4AA] mb-2">95%</div>
                      <div className="text-sm text-white/80">Kepatuhan Pelaku Usaha</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D4AA] mb-2">100%</div>
                      <div className="text-sm text-white/80">Transparansi Laporan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D4AA] mb-2">90%</div>
                      <div className="text-sm text-white/80">Kepuasan Masyarakat</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D4AA] mb-2">85%</div>
                      <div className="text-sm text-white/80">Efektivitas Penindakan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D4AA] to-[#00E6B8] rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1B425F]">Misi</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                KPPU memiliki beberapa misi strategis untuk mencapai visi yang telah ditetapkan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Pengawasan Efektif",
                  description: "Melakukan pengawasan yang efektif terhadap praktik monopoli dan persaingan usaha tidak sehat",
                  color: "from-[#1B425F] to-[#2A5F7A]"
                },
                {
                  icon: Users,
                  title: "Advokasi Aktif",
                  description: "Melakukan advokasi untuk mendorong terciptanya persaingan usaha yang sehat",
                  color: "from-[#00D4AA] to-[#00E6B8]"
                },
                {
                  icon: Globe,
                  title: "Kerjasama Strategis",
                  description: "Menjalin kerjasama dengan berbagai pihak untuk penguatan pengawasan persaingan usaha",
                  color: "from-[#1B425F] to-[#2A5F7A]"
                }
              ].map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="card-modern floating-card group"
                >
                  <div className="flex flex-col h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <mission.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B425F] mb-4">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-[#1B425F] to-[#2A5F7A] rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nilai-Nilai Organisasi</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Nilai-nilai yang menjadi dasar dalam menjalankan tugas dan fungsi KPPU
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Independensi",
                    description: "Bertindak secara independen dan objektif dalam pengambilan keputusan"
                  },
                  {
                    title: "Integritas",
                    description: "Menjunjung tinggi kejujuran, keadilan, dan etika dalam setiap tindakan"
                  },
                  {
                    title: "Profesionalisme",
                    description: "Mengutamakan kompetensi dan kinerja yang tinggi dalam pelayanan"
                  },
                  {
                    title: "Transparansi",
                    description: "Mengutamakan keterbukaan dan akuntabilitas dalam pengelolaan"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-[#00D4AA]">{index + 1}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-white/80 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

