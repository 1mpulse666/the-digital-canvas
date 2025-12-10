import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating visually stunning and intuitive user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and smooth user experiences',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life',
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-5xl font-mono font-bold text-primary-foreground">A</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/30 rounded-full w-3/4 mx-auto" />
                      <div className="h-3 bg-secondary/30 rounded-full w-1/2 mx-auto" />
                      <div className="h-3 bg-accent/30 rounded-full w-2/3 mx-auto" />
                    </div>
                  </div>
                </div>
                
                {/* Code-like decorations */}
                <div className="absolute top-4 left-4 font-mono text-xs text-primary/60">
                  {'<developer>'}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/60">
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
              <span className="text-primary font-mono text-sm mb-2 block">// About Me</span>
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
                Passionate About{' '}
                <span className="text-gradient">Creating</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                I'm a freelance web developer with a passion for building beautiful, 
                functional, and user-centered digital experiences. With a strong foundation 
                in modern web technologies, I transform complex problems into simple, 
                elegant solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in web development started with curiosity and has evolved into 
                a dedicated pursuit of excellence. Every project is an opportunity to push 
                boundaries and deliver something extraordinary.
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
