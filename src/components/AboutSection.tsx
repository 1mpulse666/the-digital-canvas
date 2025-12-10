import { Code, Palette, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import artemPhoto from '@/assets/artem-photo.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc,
    },
    {
      icon: Palette,
      title: t.about.modernDesign,
      description: t.about.modernDesignDesc,
    },
    {
      icon: Zap,
      title: t.about.performance,
      description: t.about.performanceDesc,
    },
    {
      icon: Users,
      title: t.about.collaboration,
      description: t.about.collaborationDesc,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6 glow-primary" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                <img 
                  src={artemPhoto} 
                  alt="Artem - Web Developer" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Code-like decorations */}
                <div className="absolute top-4 left-4 font-mono text-xs text-primary/80 bg-background/80 px-2 py-1 rounded">
                  {'<developer>'}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/80 bg-background/80 px-2 py-1 rounded">
                  {'</developer>'}
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-full border border-primary/30 animate-float">
                <span className="text-sm font-medium text-primary">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-full border border-secondary/30 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-secondary">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-mono text-sm mb-2 block">{t.about.label}</span>
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
                {t.about.title}{' '}
                <span className="text-gradient">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t.about.description1}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.description2}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 glass-card rounded-xl hover-glow group cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-mono font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
