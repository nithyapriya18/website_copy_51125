const PricingHero = () => {
  return (
    <section className="relative min-h-fit flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--peacock-blue))] via-[hsl(var(--peacock-cyan))] to-[hsl(var(--peacock-green))] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Choose the plan that fits your business. Scale as you grow with our flexible AI solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;