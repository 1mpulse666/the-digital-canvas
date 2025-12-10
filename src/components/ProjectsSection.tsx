import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web app', 'landing page', 'e-commerce'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with cart functionality, payment integration, and admin dashboard.',
      image: 'linear-gradient(135deg, hsl(174 72% 56% / 0.3), hsl(280 70% 60% / 0.3))',
      category: 'e-commerce',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'linear-gradient(135deg, hsl(280 70% 60% / 0.3), hsl(24 95% 60% / 0.3))',
      category: 'web app',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'SaaS Landing Page',
      description: 'A conversion-focused landing page for a SaaS product with animations and interactive elements.',
      image: 'linear-gradient(135deg, hsl(24 95% 60% / 0.3), hsl(174 72% 56% / 0.3))',
      category: 'landing page',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A creative portfolio website showcasing work with smooth animations and modern design.',
      image: 'linear-gradient(135deg, hsl(174 72% 56% / 0.4), hsl(280 70% 60% / 0.2))',
      category: 'landing page',
      tags: ['React', 'GSAP', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts and data visualization.',
      image: 'linear-gradient(135deg, hsl(280 70% 60% / 0.4), hsl(174 72% 56% / 0.2))',
      category: 'web app',
      tags: ['React', 'D3.js', 'GraphQL', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Online Store',
      description: 'A fully-featured online store with product filtering, wishlist, and order tracking.',
      image: 'linear-gradient(135deg, hsl(24 95% 60% / 0.4), hsl(280 70% 60% / 0.2))',
      category: 'e-commerce',
      tags: ['Next.js', 'Prisma', 'Stripe', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-2 block">// My Work</span>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(174_72%_56%/0.4)]'
                  : 'glass-card text-muted-foreground hover:text-primary hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: project.image }}
                />
                <div className="absolute inset-0 bg-background/50" />
                
                {/* Overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-card text-foreground hover:scale-110 transition-transform border border-border"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium capitalize">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-mono font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-muted/50 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
