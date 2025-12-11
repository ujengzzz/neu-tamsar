import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "info@neutronbandung2.com",
    href: "mailto:info@neutronbandung2.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+62 123 4567 8900",
    href: "tel:+621234567890"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Bandung, West Java, Indonesia",
    href: "#"
  }];
  return <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

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
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Komitmen <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visi dan misi yang telah dirumuskan merupakan pegangan teguh NEUTRON untuk terus berkontribusi di dunia pendidikan Indonesia.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a 
                key={index} 
                href={item.href} 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group flex flex-col items-center gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-smooth text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium group-hover:text-primary transition-smooth">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;