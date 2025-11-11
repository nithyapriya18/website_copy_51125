import { Sparkles } from "lucide-react";

const ResourcesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated ripples background - different from About section */}
      <div className="absolute inset-0">
        <div className="ripple-container">
          <div className="ripple ripple-1"></div>
          <div className="ripple ripple-2"></div>
          <div className="ripple ripple-3"></div>
          <div className="ripple ripple-4"></div>
        </div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
          {/* Sparkle icon */}
          <div className="animate-bounce-slow">
            <Sparkles className="w-20 h-20 text-[hsl(var(--peacock-cyan))]" strokeWidth={1.5} />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Coming <span className="text-gradient">Soon</span>
          </h1>
          
          {/* Fun Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl leading-relaxed font-light">
            We're cooking up something special for you
          </p>

          {/* CTA */}
          <div className="pt-8">
            <p className="text-gray-400 mb-6 text-lg">In the meantime, let's chat about your store</p>
            <a 
              href="/#contact-form"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-lg"
            >
              Get in Touch
            </a>
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

        /* Ripple animation - different from About section */
        .ripple-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid hsl(var(--peacock-cyan));
          border-radius: 50%;
          opacity: 0;
        }

        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.6;
          }
          100% {
            width: 1200px;
            height: 1200px;
            opacity: 0;
          }
        }

        .ripple-1 {
          animation: ripple 6s ease-out infinite;
        }

        .ripple-2 {
          animation: ripple 6s ease-out infinite 1.5s;
        }

        .ripple-3 {
          animation: ripple 6s ease-out infinite 3s;
        }

        .ripple-4 {
          animation: ripple 6s ease-out infinite 4.5s;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default ResourcesHero;