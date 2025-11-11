import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative min-h-fit flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--peacock-blue))] via-[hsl(var(--peacock-cyan))] to-[hsl(var(--peacock-green))] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Shopping Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Your <span className="text-gradient">Intelligent</span> Shopping Companion
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Meet our suite of AI agents designed to understand your style, preferences, and needs—transforming how you discover and shop for products.
          </p>
          
          {/* <Button size="lg" className="mt-4">
            Explore Our Agents <ArrowRight className="w-4 h-4 ml-2" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;