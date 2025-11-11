import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight pb-4">
            Your Store, Amplified.{" "}
            <span className="block text-gradient mt-4 pb-2">
              AI That Works for You.
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Augment your team. Accelerate your growth. All automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/about#contact-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] text-black hover:opacity-90 transition-all font-semibold px-8 py-6 group"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
