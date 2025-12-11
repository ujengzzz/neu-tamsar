import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, GraduationCap, Trophy, Target } from "lucide-react";
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const categories = [{
    icon: BookOpen,
    title: "Tingkat SD",
    description: "Program bimbingan belajar untuk siswa Sekolah Dasar dengan metode fun learning yang menyenangkan.",
    features: ["Matematika Dasar", "Bahasa Indonesia", "IPA & IPS", "Bahasa Inggris"],
    color: "from-red-200 to-pink-200",
    borderColor: "border-red-300",
    rotation: "-rotate-2"
  }, {
    icon: GraduationCap,
    title: "Tingkat SMP",
    description: "Persiapan menghadapi ujian dan materi pelajaran SMP dengan pendekatan yang mudah dipahami.",
    features: ["Matematika", "IPA Terpadu", "Bahasa Inggris", "Persiapan Ujian"],
    color: "from-yellow-200 to-orange-200",
    borderColor: "border-yellow-300",
    rotation: "rotate-1"
  }, {
    icon: Trophy,
    title: "Tingkat SMA",
    description: "Fokus pada persiapan UTBK, ujian sekolah, dan pendalaman materi untuk masuk PTN favorit.",
    features: ["Saintek & Soshum", "UTBK Preparation", "TPS & TKA", "Simulasi Ujian"],
    color: "from-blue-200 to-cyan-200",
    borderColor: "border-blue-300",
    rotation: "-rotate-1"
  }, {
    icon: Target,
    title: "Gap Year",
    description: "Program intensif untuk alumni SMA yang ingin mempersiapkan diri masuk universitas impian.",
    features: ["Intensive UTBK", "Strategi Belajar", "Mock Test", "Konseling Jurusan"],
    color: "from-green-200 to-emerald-200",
    borderColor: "border-green-300",
    rotation: "rotate-2"
  }];
  return <section id="services" ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-400 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="sticker text-lg">Program Kami</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
            Pilih <span className="text-primary">Levelmu!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">Program-program NEUTRON Bandung 2 terbukti berhasil membimbing hampir 1.000 siswa setiap tahunnya di Kota Bandung. Temukan program yang paling cocok denganmu.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1
        }} className="group">
              <div className={`relative bg-white border-3 border-foreground/80 rounded-3xl p-8 h-full transition-bounce hover:scale-105 shadow-scrapbook ${category.rotation} hover:rotate-0`}>
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} ${category.borderColor} border-2 rounded-2xl flex items-center justify-center mb-6 shadow-scrapbook`}>
                  <category.icon className="w-10 h-10 text-foreground" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm font-medium text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>)}
                </ul>

                {/* Decorative sticker */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-scrapbook transform rotate-12">
                  ⭐
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Services;