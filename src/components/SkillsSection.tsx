import { useEffect, useState, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React / Next.js', level: 90, color: 'from-primary to-primary/60' },
    { name: 'TypeScript', level: 85, color: 'from-primary to-secondary' },
    { name: 'JavaScript', level: 95, color: 'from-accent to-accent/60' },
    { name: 'HTML / CSS', level: 95, color: 'from-secondary to-secondary/60' },
    { name: 'Tailwind CSS', level: 90, color: 'from-primary to-accent' },
    { name: 'Node.js', level: 75, color: 'from-secondary to-primary' },
    { name: 'Git / GitHub', level: 85, color: 'from-accent to-secondary' },
    { name: 'Responsive Design', level: 95, color: 'from-primary to-secondary' },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'Node.js', icon: '💚' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'GraphQL', icon: '◈' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-2 block">// My Skills</span>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Constantly learning and improving my skills to deliver the best solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-medium">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '30+', label: 'Projects Completed' },
              { value: '20+', label: 'Happy Clients' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-mono font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="font-mono font-semibold text-xl mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="px-4 py-2 rounded-full border border-border/50 bg-muted/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default group"
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="font-medium group-hover:text-primary transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
