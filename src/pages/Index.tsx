import Hero from "@/components/Hero";
import Problem from "@/components/sections/products/Problem";
import Features from "@/components/Features";
import DualSuite from "@/components/DualSuite";
import CTA from "@/components/CTA";
import ScrollDeckSection from "@/components/ui/ScrollDeckSection";

const Index = () => {
  return (
    <div className="relative bg-background text-foreground overflow-hidden">
      {/* Main scrollable content */}
      <main className="relative z-10">
        <ScrollDeckSection index={0}>
          <Hero />
        </ScrollDeckSection>

        <ScrollDeckSection index={1}>
          <Problem />
        </ScrollDeckSection>

        <ScrollDeckSection index={2}>
          <Features />
        </ScrollDeckSection>

        <ScrollDeckSection index={3}>
          <DualSuite />
        </ScrollDeckSection>

        <ScrollDeckSection index={4}>
          <CTA />
        </ScrollDeckSection>
      </main>
    </div>
  );
};

export default Index;
