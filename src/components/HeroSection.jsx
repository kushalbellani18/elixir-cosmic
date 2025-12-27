import { Button } from "@/components/ui/button";
import elixirLogo from "@/assets/ec-logo-removebg.png";
import CosmicScene from "./CosmicScene";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <CosmicScene />
      
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 via-transparent to-cosmic-cyan/10 pointer-events-none z-[1]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-8 animate-float">
          <img
            src={elixirLogo}
            alt="Elixir Cosmic Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-[0_0_30px_hsl(var(--cosmic-pink)/0.5)]"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in">
          <span className="meow-script">Elixir</span> <span className="jersey-10-regular text-gradient-animated glow-text">COSMIC</span>
        </h1>

        <p className="text-lg md:text-xl text-cosmic-pink font-medium tracking-widest uppercase mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Nightclub & Party Advertising
        </p>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Elevate Your Events with Cosmic-Level Promotion
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="glassPrimary"
            size="xl"
            onClick={() => scrollToSection("contact")}
            className="min-w-[200px]"
          >
            Get Started
          </Button>
          <Button
            variant="glassSecondary"
            size="xl"
            onClick={() => scrollToSection("services")}
            className="min-w-[200px]"
          >
            View Our Services
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
