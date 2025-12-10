import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card border-b border-border/50 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-mono font-bold text-gradient"
        >
          <Code2 className="w-8 h-8 text-primary" />
          <span>DevAlex</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.name}
            </button>
          ))}
          <Button variant="glow" onClick={() => scrollToSection('#contact')}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4 animate-scale-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
              >
                {link.name}
              </button>
            ))}
            <Button variant="glow" onClick={() => scrollToSection('#contact')} className="mt-2">
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
