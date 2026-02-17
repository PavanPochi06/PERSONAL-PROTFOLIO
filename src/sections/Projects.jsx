import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    tilte: "Amazon Clone",
    description: "A clone of the Amazon e-commerce website. This project replicates the core features of Amazon, including product listings, shopping cart functionality, and user authentication.",
    image: "amazon-clone.png",
    tags: ["HTML", "CSS", "JS"],
    link: "https://github.com/PavanPochi06/AMAZON-PROJECT",
  },
  {
    tilte: "Modern UI/UX Design",
    description: "A modern UI/UX design project. This project showcases a sleek and contemporary design for a web application, focusing on user experience and visual appeal.",
    image: "modern-page.png",
    tags: ["React.js", "Tailwind.css"],
    link: "https://github.com/PavanPochi06/MODERN-UI-UX",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on, showcasing my skills in web development and design.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay: `${(idx + 1) * 100}ms`}}>
              <div className="relative overflow-hidden aspect-video">
                <img 
                src={project.image} 
                alt={project.tilte}
                className="w-full h-full object-cover transition-tranform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold grouup-hover:text-primary transition-colors">
                    {project.tilte}
                  </h3>
                  <ArrowUpRight 
                    className="text-white-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transiton-all duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
