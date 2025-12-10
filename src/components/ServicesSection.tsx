import { Layout, Smartphone, Palette, Gauge, Code, Database } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Layout,
      title: 'Web Development',
      description: 'Building modern, responsive websites and web applications using the latest technologies and best practices.',
      features: ['Custom websites', 'E-commerce solutions', 'CMS integration'],
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and works perfectly on all devices, from mobile phones to large desktops.',
      features: ['Mobile-first approach', 'Cross-browser support', 'Fluid layouts'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.',
      features: ['User research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed and performance to ensure fast loading times and smooth interactions.',
      features: ['Code optimization', 'Image compression', 'Caching strategies'],
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Connecting your website with third-party services and APIs to extend functionality and automate processes.',
      features: ['REST APIs', 'GraphQL', 'Payment gateways'],
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Designing and implementing efficient database structures for your web applications.',
      features: ['Database design', 'Data migration', 'Query optimization'],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-2 block">// What I Do</span>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-6 hover-glow cursor-default relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-mono font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
