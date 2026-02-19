import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "pavanpochi06@gmail.com",
    href: "mailto:pavanreddy2021@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+91 9342228780",
    href: "tel:+919392837489",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Chennai, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/PavanPochi06",
    label: "GitHub",
  },
];

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8 mb-16">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-300 text-secondary-foreground">
            Let's work together,
            <span className="font-serif italic font-normal text-white">
              {" "}
              create something amazing
            </span>
          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl">
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="glass rounded-2xl p-6 animate-fade-in hover:glow-border transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className="glass rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="glass rounded-2xl p-8 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="large" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
