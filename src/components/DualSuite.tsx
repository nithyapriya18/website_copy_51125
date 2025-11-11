import { Brain, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const DualSuite = () => {
  const suites = [
    {
      icon: Brain,
      titleTop: "Customer Suite",
      // titleBottom: "Suite",
      description:
        "Smart search and AI assistance that turns browsers into buyers.",
      link: "/customer",
      cta: "Explore Customer Suite →",
    },
    {
      icon: BarChart3,
      titleTop: "Merchant Suite",
      // titleBottom: "Suite",
      description:
        "Auto-merchandising and predictive insights that maximize every sale.",
      link: "/merchant",
      cta: "Explore Merchant Suite →",
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-6 bg-white border-t border-border/20">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Section Header */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
            One Platform.
            <span className="block text-gradient mt-4">
              Two Powerful Suites
            </span>
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-black/80">
            AI that helps customers shop smarter and merchants sell better.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-12">
            {suites.map((suite, index) => {
              const Icon = suite.icon;
              return (
                <Link
                  key={index}
                  to={suite.link}
                  className="relative group rounded-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                  {/* Card */}
                  <div className="relative bg-gray-50 border border-primary/20 rounded-2xl p-10 md:p-12 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full flex flex-col text-center items-center">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] opacity-60 group-hover:opacity-100 transition-opacity"></div>

                    {/* Icon */}
                    <div className="mb-6">
                      <Icon className="w-8 h-8 text-[hsl(var(--peacock-cyan))]" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
  {suite.titleTop}
</h3>


                    {/* Description */}
                    <p className="text-base md:text-lg text-black/70 leading-relaxed max-w-sm mt-4">
                      {suite.description}
                    </p>

                    {/* CTA */}
                    <p className="text-[hsl(var(--peacock-cyan))] font-semibold mt-6 group-hover:underline">
                      {suite.cta}
                    </p>

                    {/* Hover overlay gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[hsl(var(--peacock-green))/5] to-[hsl(var(--peacock-cyan))/5]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualSuite;