import { Rocket } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cosmic-purple/5 to-background" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-foreground rounded-full animate-star-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
            <span className="text-gradient">Portfolio</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-3 glass-card px-8 py-4 mb-8 animate-pulse-glow opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Rocket className="w-6 h-6 text-cosmic-cyan" />
            <span className="text-lg md:text-xl font-semibold text-foreground">
              Coming Soon – Real Client Projects
            </span>
          </div>

          <p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            We're just getting started! Be among our first featured clients and get your events promoted with{" "}
            <span className="text-gradient font-semibold">cosmic-level creativity</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
