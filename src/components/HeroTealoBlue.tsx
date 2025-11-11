import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroTealoBlue = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Teal to Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/25 via-cyan-400/20 to-blue-600/25 opacity-40 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a608_1px,transparent_1px),linear-gradient(to_bottom,#14b8a608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-400/20 border border-teal-400/30 backdrop-blur-sm">
              <Waves className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">
                Fluid Innovation
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Flow with Purpose
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent mt-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Seamless integration
            </p>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              Experience the perfect blend of creativity and technology. Smooth workflows, intuitive interfaces, and powerful capabilities that adapt to your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-cyan-400 text-black hover:opacity-90 transition-all text-base font-semibold px-8 py-6 group shadow-lg shadow-teal-500/40"
                onClick={() => navigate('/flow')}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-teal-400/50 text-teal-300 hover:bg-teal-400/10 text-white font-semibold px-8 py-6"
                onClick={() => navigate('/features')}
              >
                Discover
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-teal-400/20">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>50M+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>150+</div>
                <div className="text-sm text-gray-500">Integrations</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>4.9★</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Flowing gradient shapes */}
          <div className="relative h-96 md:h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Flowing gradient orbs */}
              <div className="absolute w-52 h-52 bg-gradient-to-br from-teal-500/30 to-cyan-400/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <div className="absolute w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-600/15 rounded-full blur-3xl opacity-60 transform translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-400/25 to-teal-500/10 rounded-full blur-2xl opacity-50 transform -translate-x-16 -translate-y-8"></div>
              
              {/* Center card */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-teal-500/40 to-blue-500/30 rounded-2xl blur-lg border border-teal-400/40 backdrop-blur-md flex items-center justify-center">
                <Waves className="w-16 h-16 text-teal-300 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTealoBlue;