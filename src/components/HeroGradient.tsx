import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroGradient = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b208_1px,transparent_1px),linear-gradient(to_bottom,#0891b208_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Lightning Fast Deployment
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Deploy with Confidence
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Zero downtime deployments
            </p>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              Enterprise-grade deployment platform with automated rollbacks, instant scaling, and real-time monitoring. Ship faster, fail safer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:opacity-90 transition-all text-base font-semibold px-8 py-6 group shadow-lg shadow-cyan-500/50"
                onClick={() => navigate('/deploy')}
              >
                Start Deploying
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 text-white font-semibold px-8 py-6"
                onClick={() => navigate('/docs')}
              >
                View Docs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cyan-400/20">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>99.99%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>5s</div>
                <div className="text-sm text-gray-400">Deploy Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>0ms</div>
                <div className="text-sm text-gray-400">Downtime</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Gradient cards */}
          <div className="relative h-96 md:h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Floating gradient cards */}
              <div className="absolute w-64 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-2xl border border-cyan-400/30 backdrop-blur-md transform -rotate-6 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute w-64 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-2xl border border-blue-400/30 backdrop-blur-md transform rotate-6 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute w-72 h-48 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 rounded-2xl border border-cyan-300/40 backdrop-blur-lg flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-white mb-2">Instant Deployment</p>
                  <p className="text-sm text-gray-300">Push to production instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGradient;