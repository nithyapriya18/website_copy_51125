import { Lock, Leaf, Eye, Zap, Brain, Stars, Shirt } from "lucide-react";

const ProductsComingSoon = () => {
  const agents = [
    {
      id: 1,
      icon: Eye,
      title: "Visual Discovery Agent",
      abstract: "See something you like? We'll find what matches and what completes the look.",
    },
    {
      id: 2,
      icon: Zap,
      title: "Smart Value Finder",
      abstract: "Never overpay. We scan the market to surface the best deals automatically.",
    },
    {
      id: 3,
      icon: Brain,
      title: "Context Intelligence Engine",
      abstract: "Understanding the why behind every choice — moment, mood, and meaning combined.",
    },
    {
      id: 4,
      icon: Leaf,
      title: "Conscious Commerce Scout",
      abstract: "Connecting you with products that align with your values and community.",
    },
    {
      id: 5,
      icon: Stars,
      title: "Cosmic Compatibility System",
      abstract: "An experimental approach to personalized discovery we're not quite ready to reveal.",
    },
    {
      id: 6,
      icon: Shirt,
      title: "Virtual Styling Chamber",
      abstract: "Try on, mix, and complete your look before you commit. Still in the testing phase.",
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-6 bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
            The Future of{" "}
            <span className="text-gradient">Shopping</span>
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-black/80">
            We're building next-generation retail AI agents. Hover to reveal what's coming.
          </p>

          {/* Agents Grid - matching Problem.tsx styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mt-12">
            {agents.map((agent) => {
              const IconComponent = agent.icon;
              return (
                <div key={agent.id} className="relative group flip-card">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                  {/* Main card - reduced height */}
                  <div className="relative bg-gray-50 border border-primary/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden h-[220px]">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Card Inner (for flip effect) */}
                    <div className="flip-card-inner">
                      {/* Front Face */}
                      <div className="flip-card-front gap-3">
                        <div className="p-2.5 rounded-full bg-gradient-to-br from-[hsl(var(--peacock-green))/20] to-[hsl(var(--peacock-cyan))/20] border border-[hsl(var(--peacock-cyan))/30]">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-black text-center px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {agent.title}
                        </h3>
                      </div>

                      {/* Back Face */}
                      <div className="flip-card-back px-6 text-center">
                        <div className="p-2 rounded-full bg-gradient-to-br from-[hsl(var(--peacock-green))/20] to-[hsl(var(--peacock-cyan))/20] border border-[hsl(var(--peacock-cyan))/30] mb-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm text-black/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {agent.abstract}
                        </p>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[hsl(var(--peacock-green))/5] to-[hsl(var(--peacock-cyan))/5]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* "And More" Teaser */}
          <div className="mt-8">
            <p className="text-base text-black/60 italic">
              ...and that's just the beginning. We have more in the lab.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 w-full max-w-3xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative bg-gray-50 border border-primary/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Want Early Access?
                </h3>
                <p className="text-base md:text-lg text-black/70 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We're unlocking capabilities gradually. Join the waitlist to experience what we're building.
                </p>
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] text-white hover:shadow-lg transition-all duration-300 font-semibold">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsComingSoon;