import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lighting-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collabrating",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practise.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-300 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> one component at a time</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a passionate web developer who enjoys turning ideas into interactive and meaningful digital experiences. I specialize in building responsive, user-friendly websites using modern technologies like HTML, CSS, and JavaScript.
              </p>
              <p>
                I have experience working with both front-end and back-end technologies, which allows me to develop complete, dynamic web applications.
              </p>
              <p>
                As a developer, I believe in continuous learning and constant improvement. I stay updated with the latest industry trends, tools, and frameworks to refine my skills and deliver better results.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in  animation-delay-300 mb-10">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create web experiences that are not only functional but also delightful to use."
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="glass rounded-2xl p-6 animate-fade-in" 
              style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary "/></div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
