import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import staffSugino from "@/assets/staff-sugino.jpg";
import staffFariza from "@/assets/staff-fariza.jpg";
import staffSusanti from "@/assets/staff-susanti.jpg";
import staffIndriyani from "@/assets/staff-indriyani.jpg";
import staffSlamet from "@/assets/staff-slamet.jpg";
import staffShohibul from "@/assets/staff-shohibul.jpg";
import staffKurnia from "@/assets/staff-kurnia.jpg";
import staffSugianto from "@/assets/staff-sugianto.jpg";
import staffHilqi from "@/assets/staff-hilqi.jpg";

const Staff = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const staffMembers = [
    {
      name: "Sugino",
      role: "Kepala Cabang",
      email: "sugino@neutron-bandung2.com",
      phone: "+62 812-3456-7890",
      image: staffSugino,
    },
    {
      name: "Fariza Ardhia",
      role: "Bendahara",
      email: "fariza@neutron-bandung2.com",
      phone: "+62 812-3456-7891",
      image: staffFariza,
    },
    {
      name: "Susanti",
      role: "Staf Admin",
      email: "susanti@neutron-bandung2.com",
      phone: "+62 812-3456-7892",
      image: staffSusanti,
    },
    {
      name: "Indriyani Susanti",
      role: "Staf Admin",
      email: "indriyani@neutron-bandung2.com",
      phone: "+62 812-3456-7893",
      image: staffIndriyani,
    },
    {
      name: "Slamet Arifin",
      role: "Staf Pendidikan",
      email: "slamet@neutron-bandung2.com",
      phone: "+62 812-3456-7894",
      image: staffSlamet,
    },
    {
      name: "Shohibul Kahfi",
      role: "Staf Pendidikan",
      email: "shohibul@neutron-bandung2.com",
      phone: "+62 812-3456-7895",
      image: staffShohibul,
    },
    {
      name: "Kurnia",
      role: "Staf Rumah Tangga",
      email: "kurnia@neutron-bandung2.com",
      phone: "+62 812-3456-7896",
      image: staffKurnia,
    },
    {
      name: "Sugianto",
      role: "Staf Rumah Tangga",
      email: "sugianto@neutron-bandung2.com",
      phone: "+62 812-3456-7897",
      image: staffSugianto,
    },
    {
      name: "Hilqi Prawesty",
      role: "P2K",
      email: "hilqi@neutron-bandung2.com",
      phone: "+62 812-3456-7898",
      image: staffHilqi,
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
      <section ref={ref} className="py-16 px-4 pb-32">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : 'rotate-2'}`}
              >
                <div className="relative bg-white border-3 border-foreground/80 rounded-3xl p-6 shadow-scrapbook transition-bounce hover:rotate-0 hover:scale-105">
                  {/* Polaroid-style photo */}
                  <div className="bg-white p-3 border-2 border-foreground/60 rounded-2xl mb-4 shadow-scrapbook">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full aspect-[3/4] object-cover rounded-xl"
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
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{staff.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
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
