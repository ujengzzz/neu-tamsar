import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen, Star } from "lucide-react";
import teacherHariyono from "@/assets/teacher-hariyono.jpg";
import teacherHeru from "@/assets/teacher-heru.jpg";
import teacherRangga from "@/assets/teacher-rangga.jpg";
import teacherIrkham from "@/assets/teacher-irkham.jpg";
import teacherIne from "@/assets/teacher-ine.jpg";
import teacherHilqiPrawesty from "@/assets/teacher-hilqi-prawesty.jpg";
import teacherHerman from "@/assets/teacher-herman.jpg";
import teacherLutfi from "@/assets/teacher-lutfi.jpg";
import teacherNia from "@/assets/teacher-nia.jpg";
import teacherSelvi from "@/assets/teacher-selvi.jpg";
import teacherTiara from "@/assets/teacher-tiara.jpg";
import teacherAldion from "@/assets/teacher-aldion.jpg";
import teacherAyi from "@/assets/teacher-ayi.jpg";
import teacherLaras from "@/assets/teacher-laras.jpg";
import teacherRyan from "@/assets/teacher-ryan.jpg";

const Teachers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teachers = [
    {
      name: "Hariyono",
      subject: "Matematika",
      image: teacherHariyono,
    },
    {
      name: "Heru Tri Wibowo",
      subject: "Matematika",
      image: teacherHeru,
    },
    {
      name: "Muhammad Rangga Padika",
      subject: "Bahasa Inggris",
      image: teacherRangga,
    },
    {
      name: "Irkham Zamzuri",
      subject: "Bahasa Inggris",
      image: teacherIrkham,
    },
    {
      name: "Ine Maria",
      subject: "Bahasa Inggris",
      image: teacherIne,
    },
    {
      name: "Hilqi Prawesty",
      subject: "Bahasa Inggris",
      image: teacherHilqiPrawesty,
    },
    {
      name: "Herman Yudiana",
      subject: "Fisika",
      image: teacherHerman,
    },
    {
      name: "Lutfi Rachman",
      subject: "Fisika",
      image: teacherLutfi,
    },
    {
      name: "Nia Kania",
      subject: "Biologi",
      image: teacherNia,
    },
    {
      name: "Selvi Martinda Sari",
      subject: "Biologi",
      image: teacherSelvi,
    },
    {
      name: "Tiara Tania",
      subject: "Geografi & Sosiologi",
      image: teacherTiara,
    },
    {
      name: "Aldion",
      subject: "Sejarah",
      image: teacherAldion,
    },
    {
      name: "Ayi Heriwiyadi",
      subject: "Bahasa Indonesia",
      image: teacherAyi,
    },
    {
      name: "Laras Salmawati",
      subject: "Kimia",
      image: teacherLaras,
    },
    {
      name: "Ryan Nuary",
      subject: "Bahasa Indonesia",
      image: teacherRyan,
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
      <section ref={ref} className="py-16 px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`group ${index % 4 === 0 ? '-rotate-1' : index % 4 === 1 ? 'rotate-1' : index % 4 === 2 ? '-rotate-2' : 'rotate-2'}`}
              >
                <div className="relative bg-white border-3 border-foreground/80 rounded-3xl p-5 shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
                  {/* Photo with decorative border */}
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-br from-red-200 to-yellow-200 p-3 rounded-2xl shadow-scrapbook">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full aspect-[3/4] object-cover rounded-xl border-2 border-foreground/60"
                      />
                    </div>
                    
                    {/* Award badge */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 border-2 border-foreground rounded-full flex items-center justify-center shadow-scrapbook rotate-12">
                      <Award className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                    {teacher.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">{teacher.subject}</span>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 blur-sm" />
                  <div className="absolute top-8 -right-2 w-5 h-5 bg-pink-400 rounded-full opacity-60 blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Teachers Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-primary/10 via-yellow-100 to-primary/10 border-2 border-dashed border-primary/40 rounded-2xl px-8 py-6 shadow-soft">
              <div className="flex items-center justify-center gap-3">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <p className="text-xl md:text-2xl font-handwritten font-bold text-foreground">
                  Dan masih banyak pengajar yang lainnya!
                </p>
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;
