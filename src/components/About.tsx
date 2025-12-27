import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, BookOpen } from "lucide-react";
import classroomImage from "@/assets/classroom-1.jpg";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const features = [{
    icon: Target,
    title: "Visi Kami",
    description: "Menjadikan NEUTRON yang terbaik di Indonesia dan merupakan pendidikan non formal yang selalu terdepan dalam perubahan yang lebih baik."
  }, {
    icon: Users,
    title: "Tim Profesional",
    description: "Guru berpengalaman dan bersertifikat yang siap membimbing dengan penuh dedikasi."
  }, {
    icon: Award,
    title: "Prestasi Terbukti",
    description: "Khusus Bandung-1 (Tamansari) Ratusan siswa berhasil masuk PTN favorit dengan nilai terbaik."
  }, {
    icon: BookOpen,
    title: "Metode Belajar",
    description: "Kombinasi teori dan praktik dengan pendekatan yang fun dan menggunakan metode penalaran."
  }];
  return <section id="about" ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-pink-50/20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl" />
      
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
          <span className="sticker text-lg mb-6">Tentang Kami</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 mt-6 text-foreground">
            Kenalan Yuk! <span className="text-primary">😊</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            NEUTRON Bandung 1 adalah kantor cabang NEUTRON yang ke-1 di Bandung. NEUTRON Bandung 1 terletak di Jl. Tamansari No. 61, Coblong, Bandung.<br />
NEUTRON Bandung 1 memiliki berbagai program terbaik yang bertujuan untuk memberikan hasil terbaik bagi siswa. Selain itu, jajaran pengajar dan staf NEUTRON Bandung 1 merupakan figur-figur yang memiliki kompetensi tinggi dalam setiap bidang mereka.<br />Kantor cabang ini juga memiliki fasilitas yang lengkap sehingga dapat menunjang proses belajar-mengajar dan memberikan hasil yang terbaik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="bg-white p-4 border-3 border-foreground/80 rounded-3xl shadow-scrapbook transform -rotate-2 hover:rotate-0 transition-bounce">
              <img src={classroomImage} alt="Ruang Kelas Neutron" className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-foreground/60" />
              <p className="text-center mt-3 font-handwritten text-base text-foreground">Suasana belajar yang nyaman! 📚</p>
              
              {/* Decorative tape */}
              <div className="absolute -top-3 right-1/4 w-20 h-7 bg-blue-400/50 border border-blue-500/60 rotate-12" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-foreground">
              Membangun <span className="text-primary">Masa Depan</span> Cerah!
            </h3>
            <p className="text-foreground/80 leading-relaxed font-body">Sejak berdiri, kami sudah membantu ribuan siswa masuk ke PTN impian mereka. Tim pengajar kami berpengalaman dan selalu siap bantu kamu sampai benar-benar paham!</p>
            <p className="text-foreground/80 leading-relaxed font-body">
              Kami percaya bahwa setiap siswa punya potensi luar biasa. Dengan metode belajar 
              yang tepat dan bimbingan yang konsisten, kamu pasti bisa raih impianmu! 💪
            </p>

            {/* Fun Stats */}
            <div className="flex gap-4 pt-4">
              <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-4 shadow-scrapbook transform -rotate-1">
                <div className="text-2xl font-display font-bold text-foreground">30+</div>
                <div className="text-sm text-foreground/70">Tahun</div>
              </div>
              <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-4 shadow-scrapbook transform rotate-1">
                <div className="text-2xl font-display font-bold text-foreground">1Jt+</div>
                <div className="text-sm text-foreground/70">Alumni</div>
              </div>
              <div className="bg-blue-100 border-2 border-blue-300 rounded-2xl p-4 shadow-scrapbook transform -rotate-2">
                <div className="text-2xl font-display font-bold text-foreground">95%</div>
                <div className="text-sm text-foreground/70">Lulus PTN</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.6 + index * 0.1
        }} className={`group ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
              <div className="relative bg-white border-3 border-foreground/80 rounded-3xl p-6 h-full hover:rotate-0 hover:scale-105 transition-bounce shadow-scrapbook">
                <div className="w-14 h-14 bg-primary/20 border-2 border-primary/40 rounded-2xl flex items-center justify-center mb-4 shadow-scrapbook">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                </div>
                <h4 className="text-xl font-display font-bold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{feature.description}</p>
                
                {/* Decorative corner star */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs shadow-scrapbook">
                  ⭐
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default About;
