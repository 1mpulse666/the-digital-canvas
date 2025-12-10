import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 text-xl font-mono font-bold text-gradient">
              <Code2 className="w-6 h-6 text-primary" />
              <span>DevAlex</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building beautiful, functional web experiences. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono font-semibold">Quick Links</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-mono font-semibold">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg glass-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} DevAlex. Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> and lots of ☕
          </p>
          <p className="text-muted-foreground text-sm font-mono">
            {'<'} Built with React + TypeScript {' />'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
