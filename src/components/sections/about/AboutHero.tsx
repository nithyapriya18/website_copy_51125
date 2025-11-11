const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--peacock-cyan))] to-[hsl(var(--peacock-blue))] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            Building the Future of{" "}
            <span className="text-gradient">Retail</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Where AI meets human understanding to transform how people shop online
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-gray-400">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">AI</div>
              <div className="text-sm text-gray-400">Powered Intelligence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
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

export default AboutHero;