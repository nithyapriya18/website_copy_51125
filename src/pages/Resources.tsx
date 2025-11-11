import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="relative mb-8 inline-block">
            <div className="floating-sparkle">
              <Sparkles className="w-20 h-20 text-teal-400" />
            </div>
            {/* Pulsing circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pulse-circle pulse-circle-1"></div>
              <div className="pulse-circle pulse-circle-2"></div>
              <div className="pulse-circle pulse-circle-3"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Something's <span className="text-gradient">Cooking</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            We're preparing something special for you.
          </p>
          
          <p className="text-lg text-gray-400 mb-12">
            Our resources hub is coming soon with guides, case studies, tutorials, and best practices to help you succeed with AI-powered commerce.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
            >
              <span>Explore Solutions</span>
            </Link>
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <span className="text-sm text-teal-400">Coming Soon</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, rgb(20 184 166), rgb(6 182 212));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Floating animation for sparkle icon */
        .floating-sparkle {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Pulsing circles */
        .pulse-circle {
          position: absolute;
          border: 2px solid rgba(20, 184, 166, 0.3);
          border-radius: 50%;
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .pulse-circle-1 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .pulse-circle-2 {
          width: 100px;
          height: 100px;
          animation-delay: 1s;
        }

        .pulse-circle-3 {
          width: 120px;
          height: 120px;
          animation-delay: 2s;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
};

export default Resources;