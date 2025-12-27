import { Palette, Smartphone, Video, Sparkles, Target, Gem } from "lucide-react";

const ServiceCard = ({ icon, title, description, examples, delay }) => {
  return (
    <div
      className="glass-card p-6 md:p-8 glow-border-hover group opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl mb-4 text-muted-foreground group-hover:text-cosmic-pink transition-colors duration-300 drop-shadow-[0_0_10px_hsl(var(--cosmic-cyan)/0.5)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {examples.map((example, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-cosmic-cyan">✓</span>
            {example}
          </li>
        ))}
      </ul>
    </div>
  );
};

const services = [
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Event Flyers",
    description: "Eye-catching visuals that capture the energy of your events.",
    examples: ["DJ Night Posters", "Weekend Announcements", "Theme Graphics"],
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Instagram Stories & Posts",
    description: "Engaging social content designed for maximum reach.",
    examples: ["Animated Templates", "Countdown Stickers", "Feed Posts"],
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "Video Promotions",
    description: "Dynamic video content that brings your events to life.",
    examples: ["15–30s Reels", "Event Highlights", "DJ Intros"],
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Brand Identity",
    description: "Cohesive visual identity that defines your venue.",
    examples: ["Logo & Colors", "Template Library", "Event Series Branding"],
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Social Media Management",
    description: "Strategic content planning for consistent engagement.",
    examples: ["Weekly Calendar", "Daily Stories", "Engagement"],
  },
  {
    icon: <Gem className="w-10 h-10" />,
    title: "VIP Packages",
    description: "Premium promotional materials for exclusive experiences.",
    examples: ["Bottle Service Graphics", "Table Booking Promos", "Exclusive Invites"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cosmic-purple/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
            <span className="text-gradient">Our Cosmic Offerings</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Premium creative services designed to make your nightlife events unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              examples={service.examples}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
