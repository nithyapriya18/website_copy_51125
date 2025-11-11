import { Users, Lightbulb, Rocket } from "lucide-react";

const Team = () => {
  const values = [
    {
      icon: Users,
      title: "Retail-First Thinking",
      description: "Built by people who understand commerce"
    },
    {
      icon: Lightbulb,
      title: "Customer Obsession",
      description: "Every feature solves a real problem"
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description: "Learning from billions of interactions"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 md:px-6">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--peacock-cyan))] to-[hsl(var(--peacock-blue))] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Built by <span className="text-gradient">Experts</span>
            </h2>
          </div>

          {/* Origin Story - Free floating text */}
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 text-center">
              Opura was born from a simple frustration: watching brilliant products fail online because customers couldn't find what they needed.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              Founded by product leaders who've built AI systems at scale, we assembled a team bringing <span className="text-gradient font-semibold">50+ years of combined experience</span> in AI, product, and e-commerce. We've <span className="text-gradient font-semibold">launched 10+ products from 0 to 1</span>, and now we're <span className="text-gradient font-semibold">100% committed to retail</span>—solving this problem once and for all.
            </p>
          </div>

          {/* How We Work */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              How We <span className="text-gradient">Work</span>
            </h3>
            
            {/* Boxed cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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

export default Team;