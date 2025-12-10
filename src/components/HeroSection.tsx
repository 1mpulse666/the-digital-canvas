import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Web Developer', 'UI/UX Enthusiast', 'React Specialist', 'Creative Coder'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(() => {
      if (!isDeleting && charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else if (!isDeleting && charIndex > currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        charIndex--;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        clearInterval(typeEffect);
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for freelance work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="text-gradient">Alex</span>
          </h1>

          {/* Typing Effect */}
          <div className="h-12 md:h-16 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-2xl md:text-4xl font-mono text-muted-foreground">
              {displayText}
              <span className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I craft beautiful, responsive, and user-friendly web experiences. 
            Turning ideas into reality with clean code and creative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToContact}>
              Let's Talk
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full glass-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 rounded-full glass-card border border-border/50 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
