import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen } from "lucide-react";

const Teachers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder teacher data
  const teachers = [
    {
      name: "Dr. Budi Santoso",
      subject: "Matematika & Fisika",
      experience: "15 tahun",
      achievement: "Lulusan ITB, Guru Berprestasi 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Rina Wijaya, S.Pd",
      subject: "Bahasa Indonesia & Inggris",
      experience: "10 tahun",
      achievement: "Certified TESOL Teacher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Prof. Ahmad Dahlan",
      subject: "Kimia & Biologi",
      experience: "20 tahun",
      achievement: "Lulusan S3 UGM, Penulis Buku",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Lisa Hartono, M.Pd",
      subject: "Ekonomi & Geografi",
      experience: "8 tahun",
      achievement: "Juara Olimpiade Guru Nasional",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Andi Setiawan",
      subject: "TPS & Logika",
      experience: "12 tahun",
      achievement: "Alumni UI, UTBK Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Nina Kusuma, S.Si",
      subject: "Matematika Lanjut",
      experience: "9 tahun",
      achievement: "Medalis Olimpiade Matematika",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="sticker text-lg mb-6">Guru Terbaik</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 mt-6">
              Staf <span className="text-primary">Pengajar</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Belajar dari yang terbaik! Tim pengajar berpengalaman siap bimbing kamu 🎓
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section ref={ref} className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : '-rotate-2'}`}
              >
                <div className="bg-white border-3 border-foreground/80 rounded-3xl p-6 shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
                  {/* Photo with decorative border */}
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-red-200 to-yellow-200 p-4 rounded-3xl shadow-scrapbook">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full aspect-square object-cover rounded-2xl border-2 border-foreground/60"
                      />
                    </div>
                    
                    {/* Achievement badge */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 bg-yellow-400 border-2 border-foreground rounded-full flex items-center justify-center shadow-scrapbook rotate-12">
                      <Award className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                    {teacher.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-primary font-semibold">
                    <BookOpen className="w-5 h-5" />
                    <span>{teacher.subject}</span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📚 Pengalaman: {teacher.experience}</p>
                    <p className="font-medium text-foreground">🏆 {teacher.achievement}</p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-400 rounded-full opacity-60 blur-sm" />
                  <div className="absolute top-10 -right-2 w-6 h-6 bg-pink-400 rounded-full opacity-60 blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;
