import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder gallery images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      caption: "Ruang Kelas Modern",
      category: "Fasilitas",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      caption: "Suasana Belajar",
      category: "Kegiatan",
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      caption: "Area Diskusi",
      category: "Fasilitas",
    },
    {
      url: "https://images.unsplash.com/photo-1577896851905-3682037bb952?w=800&h=600&fit=crop",
      caption: "Lab Komputer",
      category: "Fasilitas",
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      caption: "Perpustakaan",
      category: "Fasilitas",
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      caption: "Kelas Interaktif",
      category: "Kegiatan",
    },
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  index % 3 === 0 ? '-rotate-2' : index % 3 === 1 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                {/* Polaroid style card */}
                <div className="bg-white p-4 border-3 border-foreground/80 rounded-3xl shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
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
