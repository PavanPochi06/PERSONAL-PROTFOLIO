import {
  Code,
  Coffee,
  GitBranch,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

const experienceData = [
  {
    icon: GraduationCap,
    title: "Core Web Technologies",
    description:
      "Built a strong foundation in HTML, CSS, and JavaScript. I focus on understanding how things work behind the scenes before moving to advanced tools and frameworks.",
  },
  {
    icon: Code,
    title: "Hands-On Projects",
    description:
      "Developed responsive websites and interactive UI components. I believe in learning by building real projects that strengthen problem-solving skills.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    description:
      "Comfortable with version control, branching, and maintaining clean repositories. I actively use GitHub to track progress and showcase my work.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly exploring modern tools and frameworks to improve efficiency and stay updated with the evolving tech landscape.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Engage with developer communities, learn from peers, and grow through shared knowledge and constructive feedback.",
  },
  {
    icon: Coffee,
    title: "Consistency & Growth Mindset",
    description:
      "Approach challenges with patience and persistence. Every bug solved and every project completed adds to my growth as a developer.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            My Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-secondary-foreground">
            Building My Path as a{" "}
            <span className="font-serif italic font-normal text-white">
              Web Developer
            </span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            As a passionate fresher in web development, I focus on mastering
            fundamentals, building real-world projects, and continuously
            improving my skills to grow into a professional developer.
          </p>
        </div>

        {/* Main Philosophy Card */}
        <div className="glass rounded-2xl p-8 glow-border animate-fade-in mb-16 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                My Learning Philosophy
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I began my journey into web development with curiosity and a
                strong desire to understand how the web works. I believe in
                learning by building and improving step by step. Each project
                strengthens my technical skills and enhances my ability to
                solve problems efficiently. I focus on writing clean,
                maintainable code while continuously exploring modern
                technologies to stay aligned with industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Growth Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
