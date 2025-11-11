import { Brain, Zap, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: Brain,
      title: "Multi-Agent Intelligence",
      description: "AI that thinks like your best salesperson"
    },
    {
      icon: Zap,
      title: "Real-Time Learning",
      description: "Gets smarter with every interaction"
    },
    {
      icon: Target,
      title: "Built for Retail",
      description: "Purpose-built for commerce"
    },
    {
      icon: Sparkles,
      title: "Seamless Integration",
      description: "Works with your existing stack"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white py-20 px-4 md:px-6">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Section - Problem Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Why We <span className="text-gradient">Exist</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed mb-4">
              Online shopping shouldn't feel like searching through a warehouse blindfolded.
            </p>
            <p className="text-lg md:text-xl text-black/60 max-w-4xl mx-auto leading-relaxed">
              We're fixing the broken online shopping experience—where <span className="font-bold text-black">97% of visitors leave empty-handed</span>, not because they don't want to buy, but because stores don't understand what they need.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gray-50 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
                  
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[hsl(var(--peacock-green))]/10 to-[hsl(var(--peacock-cyan))]/10 border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-black">{feature.title}</h3>
                    <p className="text-sm text-black/60">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Statement */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-black max-w-4xl mx-auto leading-relaxed">
              Opura brings the intelligence of the best in-store assistant to every digital interaction—
              <span className="text-gradient"> anticipating needs, understanding context, and guiding customers to what they actually want.</span>
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />
    </section>
  );
};

export default AboutUs;