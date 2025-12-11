import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    href: "#"
  }, {
    icon: Twitter,
    href: "#"
  }, {
    icon: Instagram,
    href: "#"
  }, {
    icon: Linkedin,
    href: "#"
  }, {
    icon: Github,
    href: "#"
  }];
  return <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-bold mb-4">
              <span className="gradient-text bg-muted text-primary-foreground">NEUTRON</span>
              <span className="text-accent ml-1">BANDUNG-2</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions. 
              We transform ideas into reality with innovation and excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-smooth">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@neutronbandung2.com</li>
              <li>+62 123 4567 8900</li>
              <li>Bandung, West Java</li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NEUTRON BANDUNG-2. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;