import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Git/GitHub",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "JAVA",
]

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/back-ground.jpg"
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to background" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map(() => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#7bff08",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Web Developer - React Specialist
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Web Developer specializing in HTML, CSS, JavaScript, React.js, Git/GitHub, and Next.js. I build scalable, high-performance web applications with a focus on user experience and modern development practices.
              </p>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
              <Button>
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
              <AnimatedBorderButton />
            </div>
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Follow Me: 
              </span>
              {[{icon: Github, href:"https://github.com/PavanPochi06"}]
              .map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              )) 
              }
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.png" alt="PAVANKUMAR REDDY" className="w-full object-cover rounded-4xl"/>
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
            Technologies I work with
          </p>
          <div>
           
          </div>
        </div>
      </div>
    </section>
  );
};
