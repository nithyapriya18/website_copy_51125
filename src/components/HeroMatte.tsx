import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroMatte = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Subtle matte gradient background - RED to ORANGE/GOLD */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/15 to-orange-800/20 opacity-40 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c08_1px,transparent_1px),linear-gradient(to_bottom,#ea580c08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-950/30 to-orange-950/30 border border-orange-700/40 backdrop-blur-sm">
              <Flame className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-200">
                Premium Performance
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Elevate Your Craft
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mt-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Excellence refined
            </p>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              Crafted for those who demand the best. Premium tools, intuitive design, and relentless performance. Where quality meets simplicity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-700 to-orange-600 text-white hover:opacity-90 transition-all text-base font-semibold px-8 py-6 group shadow-lg shadow-red-900/30"
                onClick={() => navigate('/premium')}
              >
                Explore Premium
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-700/50 text-white-200 hover:bg-orange-900/10 text-base font-semibold px-8 py-6"
                onClick={() => navigate('/learn')}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-orange-800/30">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>10K+</div>
                <div className="text-sm text-gray-500">Satisfied Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>24/7</div>
                <div className="text-sm text-gray-500">Premium Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>100%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Matte gradient orbs */}
          <div className="relative h-96 md:h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Subtle matte orbs - RED to ORANGE */}
              <div className="absolute w-48 h-48 bg-gradient-to-br from-red-900/30 to-transparent rounded-full blur-3xl opacity-60"></div>
              <div className="absolute w-56 h-56 bg-gradient-to-br from-orange-800/20 to-transparent rounded-full blur-3xl opacity-50 transform translate-x-16 translate-y-16"></div>
              <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-900/25 to-transparent rounded-full blur-2xl opacity-40 transform -translate-x-12 translate-y-8"></div>
              
              {/* Center accent */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-700/40 to-red-900/20 rounded-full blur-lg border border-orange-600/30 backdrop-blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMatte;