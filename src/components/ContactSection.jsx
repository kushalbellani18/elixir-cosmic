import { Mail, Instagram, Globe } from "lucide-react";

const ContactItem = ({ icon, label, value, href, delay }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 p-6 glass-card glow-border-hover min-w-[200px] opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-muted-foreground group-hover:text-cosmic-pink transition-colors duration-300">
        {icon}
      </div>
      <span className="text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <span className="text-foreground font-medium group-hover:text-cosmic-cyan transition-colors duration-300">
        {value}
      </span>
    </a>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--cosmic-purple)/0.2)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cosmic-pink/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
            <span className="text-gradient">Let's Create Something Cosmic</span>
          </h2>
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to transform your nightlife promotion? We're here to make your next event unforgettable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <ContactItem
            icon={<Mail className="w-8 h-8" />}
            label="Email"
            value="elixir.cosmic003@gmail.com"
            href="mailto:elixir.cosmic003@gmail.com"
            delay={0.3}
          />
          <ContactItem
            icon={<Instagram className="w-8 h-8" />}
            label="Instagram"
            value="@elixircosmic"
            href="https://www.instagram.com/elixircosmic/"
            delay={0.4}
          />
          <ContactItem
            icon={<Globe className="w-8 h-8" />}
            label="Web"
            value="sortmyscene.com"
            href="https://sortmyscene.com/p/elixir-cosmic-2"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
