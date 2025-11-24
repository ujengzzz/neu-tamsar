import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen } from "lucide-react";
import teacherTiara from "@/assets/teacher-tiara.jpg";
import teacherAisyah from "@/assets/teacher-aisyah.jpg";
import teacherLaras from "@/assets/teacher-laras.jpg";
import teacherAdlina from "@/assets/teacher-adlina.jpg";
import teacherIrkham from "@/assets/teacher-irkham.jpg";
import teacherHeru from "@/assets/teacher-heru.jpg";
import teacherHerman from "@/assets/teacher-herman.jpg";
import teacherKahfi from "@/assets/teacher-kahfi.jpg";
import teacherHilqiPrawesty from "@/assets/teacher-hilqi-prawesty.jpg";

const Teachers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teachers = [
    {
      name: "Tiara Tania",
      subject: "Geografi & Sosiologi",
      experience: "7 tahun",
      achievement: "Lulusan UPI, Guru Berprestasi",
      image: teacherTiara,
    },
    {
      name: "Aisyah Maziyya",
      subject: "Biologi",
      experience: "6 tahun",
      achievement: "Lulusan IPB, Certified Educator",
      image: teacherAisyah,
    },
    {
      name: "Laras Salmawati",
      subject: "Kimia",
      experience: "8 tahun",
      achievement: "Lulusan ITB, Expert Kimia",
      image: teacherLaras,
    },
    {
      name: "Adlina Saelan",
      subject: "Matematika",
      experience: "9 tahun",
      achievement: "Lulusan UI, Olimpiade Matematika",
      image: teacherAdlina,
    },
    {
      name: "Irkham Zamzuri",
      subject: "Bahasa Inggris",
      experience: "10 tahun",
      achievement: "TESOL Certified, TOEFL Expert",
      image: teacherIrkham,
    },
    {
      name: "Heru Tri Wibowo",
      subject: "Matematika",
      experience: "12 tahun",
      achievement: "Lulusan UGM, Expert UTBK",
      image: teacherHeru,
    },
    {
      name: "Herman Yudiana",
      subject: "Fisika",
      experience: "11 tahun",
      achievement: "Lulusan ITB, Fisika Champion",
      image: teacherHerman,
    },
    {
      name: "Kahfi Achmad",
      subject: "Bahasa Indonesia",
      experience: "8 tahun",
      achievement: "Lulusan UPI, Sastrawan Muda",
      image: teacherKahfi,
    },
    {
      name: "Hilqi Prawesty",
      subject: "Bahasa Inggris",
      experience: "7 tahun",
      achievement: "Cambridge Certified, IELTS Expert",
      image: teacherHilqiPrawesty,
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
      <section ref={ref} className="py-16 px-4 pb-32">
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
                <div className="relative bg-white border-3 border-foreground/80 rounded-3xl p-6 shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
                  {/* Photo with decorative border */}
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-red-200 to-yellow-200 p-4 rounded-3xl shadow-scrapbook">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full aspect-[3/4] object-cover rounded-2xl border-2 border-foreground/60"
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
