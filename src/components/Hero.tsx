import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Star, Heart } from "lucide-react";
import heroImage from "@/assets/building-1.jpg";
import logoWithName from "@/assets/logo-with-name.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-red-50/30 to-yellow-50/20">
      {/* Decorative scrapbook elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-red-300/30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-300/30 rounded-full blur-2xl" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-300/20 rounded-full blur-xl" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <div className="mb-8">
              <img src={logoWithName} alt="Neutron Bandung-2" className="h-16 md:h-20" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground leading-tight">Langkah Pasti Meraih Prestasi















 













 







 <Sparkles className="inline w-12 h-12 text-yellow-500" />
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 font-body leading-relaxed">
              Bimbingan belajar terpercaya untuk SD, SMP, SMA & Gap Year. <br />
              Bersama guru berpengalaman, raih PTN impian! 🎯
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white shadow-scrapbook">
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-foreground/60 text-foreground hover:bg-foreground/5">
                Lihat Program
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-center bg-white p-4 rounded-2xl border-2 border-foreground/20 shadow-scrapbook transform -rotate-1 hover:rotate-0 transition-bounce">
                <div className="text-3xl font-display font-bold text-primary">30+</div>
                <div className="text-xs text-muted-foreground">Tahun Pengalaman</div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-center bg-white p-4 rounded-2xl border-2 border-foreground/20 shadow-scrapbook transform rotate-1 hover:rotate-0 transition-bounce">
                <div className="text-3xl font-display font-bold text-primary">1.000.000+</div>
                <div className="text-xs text-muted-foreground">Siswa Berprestasi</div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="text-center bg-white p-4 rounded-2xl border-2 border-foreground/20 shadow-scrapbook transform -rotate-2 hover:rotate-0 transition-bounce">
                <div className="text-3xl font-display font-bold text-primary">95%</div>
                <div className="text-xs text-muted-foreground">Tingkat Kelulusan</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Scrapbook Photo Collage */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            {/* Main polaroid */}
            <div className="relative bg-white p-4 border-3 border-foreground/80 rounded-3xl shadow-scrapbook transform rotate-2 hover:rotate-0 transition-bounce">
              <img src={heroImage} alt="Gedung Neutron Bandung-2" className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-foreground/60" />
              <p className="text-center mt-3 font-handwritten text-lg text-foreground">Neutron Bandung-2 ✨</p>
              
              {/* Decorative tape */}
              <div className="absolute -top-3 left-1/4 w-20 h-7 bg-red-400/50 border border-red-500/60 -rotate-12" />
            </div>
            
            {/* Floating stickers */}
            <motion.div animate={{
            rotate: [12, 18, 12]
          }} transition={{
            duration: 3,
            repeat: Infinity
          }} className="absolute -top-6 -right-6 bg-yellow-300 border-2 border-foreground rounded-full w-20 h-20 flex items-center justify-center shadow-scrapbook">
              <Star className="w-10 h-10 text-foreground fill-foreground" />
            </motion.div>

            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }} className="absolute -bottom-4 -left-4 bg-pink-300 border-2 border-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-scrapbook">
              <Heart className="w-8 h-8 text-foreground fill-foreground" />
            </motion.div>

            {/* Decorative doodles */}
            <div className="absolute top-10 -left-6 w-12 h-12 border-4 border-blue-400 rounded-full opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;