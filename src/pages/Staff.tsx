import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

const Staff = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder staff data
  const staffMembers = [
    {
      name: "Sarah Johnson",
      role: "Direktur",
      email: "sarah@neutron.com",
      phone: "+62 812-3456-7890",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Manajer Operasional",
      email: "michael@neutron.com",
      phone: "+62 812-3456-7891",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Amanda Putri",
      role: "Admin & Customer Service",
      email: "amanda@neutron.com",
      phone: "+62 812-3456-7892",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "David Santoso",
      role: "Koordinator Akademik",
      email: "david@neutron.com",
      phone: "+62 812-3456-7893",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="sticker text-lg mb-6">Tim Kami</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 mt-6">
              Staf <span className="text-primary">Karyawan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kenalan yuk sama tim yang selalu siap bantu kamu! 💪
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section ref={ref} className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <div className="bg-white border-3 border-foreground/80 rounded-3xl p-6 shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
                  {/* Polaroid-style photo */}
                  <div className="bg-white p-3 border-2 border-foreground/60 rounded-2xl mb-4 shadow-scrapbook">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                    {staff.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{staff.role}</p>
                  
                  {/* Contact */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{staff.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{staff.phone}</span>
                    </div>
                  </div>

                  {/* Decorative tape */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/60 border border-yellow-300/80 -rotate-3" />
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

export default Staff;
