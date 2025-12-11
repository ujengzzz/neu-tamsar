import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Komitmen Kami<span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visi dan misi yang telah dirumuskan merupakan pegangan teguh NEUTRON untuk terus berkontribusi di dunia pendidikan Indonesia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-8">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">
                We're Here to <span className="text-accent">Help</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question about our services, need a quote, or want to 
                discuss a potential project, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => <motion.a key={index} href={item.href} initial={{
              opacity: 0,
              x: -30
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.1
            }} className="group flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-smooth">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium group-hover:text-primary transition-smooth">
                      {item.value}
                    </div>
                  </div>
                </motion.a>)}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="bg-background/50 border-border/50 focus:border-primary transition-smooth" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50 border-border/50 focus:border-primary transition-smooth" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus:border-primary transition-smooth" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" className="bg-background/50 border-border/50 focus:border-primary transition-smooth" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your project..." rows={5} className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground glow-primary hover:scale-105 transition-smooth group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;