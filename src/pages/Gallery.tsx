import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import building3 from "@/assets/building-3.jpg";
import building4 from "@/assets/building-4.jpg";
import building5 from "@/assets/building-5.jpg";
import building6 from "@/assets/building-6.jpg";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import classroom4 from "@/assets/classroom-4.jpg";
import additionalRoom1 from "@/assets/additional-room-1.jpg";
import additionalRoom2 from "@/assets/additional-room-2.jpg";
import bathroom1 from "@/assets/bathroom-1.jpg";
import bathroom2 from "@/assets/bathroom-2.jpg";
import mushola from "@/assets/mushola.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    { url: building1, caption: "Gedung dan Parkiran", category: "Bangunan" },
    { url: building2, caption: "Parkir Motor", category: "Bangunan" },
    { url: building3, caption: "Area Parkir", category: "Bangunan" },
    { url: building4, caption: "Tampak Depan", category: "Bangunan" },
    { url: building5, caption: "Halaman Depan", category: "Bangunan" },
    { url: building6, caption: "Area Luar", category: "Bangunan" },
    { url: classroom1, caption: "Ruang Kelas 1", category: "Ruangan" },
    { url: classroom2, caption: "Ruang Kelas 2", category: "Ruangan" },
    { url: classroom3, caption: "Ruang Kelas 3", category: "Ruangan" },
    { url: classroom4, caption: "Ruang Kelas 4", category: "Ruangan" },
    { url: additionalRoom1, caption: "Ruang Tambahan 1", category: "Ruangan" },
    { url: additionalRoom2, caption: "Ruang Tambahan 2", category: "Ruangan" },
    { url: bathroom1, caption: "Kamar Mandi 1", category: "Fasilitas" },
    { url: bathroom2, caption: "Kamar Mandi 2", category: "Fasilitas" },
    { url: mushola, caption: "Mushola", category: "Fasilitas" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/30 to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="sticker text-lg mb-6">Lihat Langsung</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 mt-6">
              Galeri <span className="text-primary">Neutron</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Intip yuk tempat belajar yang nyaman dan fasilitas lengkap! 📸
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="py-16 px-4 pb-32">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`group cursor-pointer ${
                  index % 3 === 0 ? '-rotate-2' : index % 3 === 1 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                {/* Polaroid style card */}
                <div className="relative bg-white p-4 border-3 border-foreground/80 rounded-3xl shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-foreground/60 aspect-[4/3]">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-foreground rounded-full border-2 border-foreground/60 shadow-scrapbook">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-display font-bold text-foreground font-handwritten">
                      {image.caption}
                    </h3>
                  </div>

                  {/* Decorative tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-red-400/40 border border-red-500/60 rotate-3" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-8 py-4 rounded-full border-3 border-foreground shadow-scrapbook transform -rotate-2 hover:rotate-0 transition-bounce">
                <p className="text-xl font-display font-bold">
                  Yuk, datang langsung dan rasakan suasananya! 🎉
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
