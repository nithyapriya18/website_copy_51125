import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Conversation Tier",
      tagline: "Pay per user engagement",
      pricing: "Usage-based pricing",
      description: "Perfect for emerging brands testing the waters",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Basic analytics",
        "Email support"
      ],
      agents: [
        "Recommendation Agent",
        "Support Concierge"
      ]
    },
    {
      name: "Conversion Boost",
      tagline: "Performance-based pricing",
      pricing: "Bonus per successful add-to-cart",
      description: "Scale with confidence as you grow",
      features: [
        "All Conversation features",
        "Smart recommendations",
        "Conversion tracking",
        "Priority support"
      ],
      agents: [
        "All Core Agents",
        "Choose 3 Advanced Agents"
      ],
      highlighted: true
    },
    {
      name: "Merchant Suite",
      tagline: "Full suite power",
      pricing: "Custom pricing",
      description: "Complete intelligence for established merchants",
      features: [
        "All Customer Agents",
        "Merchant Intelligence Suite",
        "Unlimited sessions",
        "Advanced analytics"
      ],
      agents: [
        "All Customer Intelligence Agents",
        "Weekly Commerce Pulse",
        "Content Optimizer Studio"
      ]
    },
    {
      name: "Enterprise",
      tagline: "Your vision, amplified",
      pricing: "Tailored solutions",
      description: "Custom solution for large merchants",
      features: [
        "Everything in Merchant Suite",
        "Custom agent development",
        "White-label options",
        "SLA guarantees"
      ],
      agents: [
        "Fully customizable suite",
        "Custom integrations",
        "Dedicated support"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-card/20">
      <div className="container max-w-[1400px] mx-auto">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border transition-all hover:shadow-2xl flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50 shadow-xl transform xl:scale-105 relative'
                  : 'bg-card/50 border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
                
                <div className="mb-4 h-12 flex items-center">
                  <div className="text-xl font-semibold text-primary">{plan.pricing}</div>
                </div>

                <p className="text-sm text-muted-foreground h-10">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider">Features</div>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Agents Included */}
              <div className="space-y-3 pt-6 border-t border-border/50 mb-6">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider">Agents Included</div>
                {plan.agents.map((agent, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{agent}</span>
                  </div>
                ))}
              </div>

              {/* Button at bottom */}
              <Button 
                className={`w-full mt-auto ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white'
                    : 'bg-primary hover:bg-primary/90'
                }`}
              >
                Contact for Pricing
              </Button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Store?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to discuss pricing tailored to your business needs
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold text-lg px-8"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;