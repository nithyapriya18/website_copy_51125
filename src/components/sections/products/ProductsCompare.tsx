import { Check, X, Scale } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductsCompare = () => {
  const comparisonFeatures = [
    { name: "Price", athena: "$999", varanga: "$499", mango: "$799" },
    { name: "Material", athena: "Satin", varanga: "Organza", mango: "Cotton" },
    { name: "Fit", athena: "Slim", varanga: "A-Line", mango: "Regular" },
    { name: "Sleeve Type", athena: "Sleeveless", varanga: "Short Sleeve", mango: "Sleeveless" },
    { name: "Care", athena: "Dry Clean", varanga: "Hand Wash", mango: "Machine Wash" },
    { name: "Rating", athena: "4.4/5", varanga: "4.2/5", mango: "4.4/5" },
  ];

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-primary" />
            <h2 className="text-5xl font-bold">
              <span className="text-gradient">Compare Agent</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Make informed decisions by comparing products side-by-side. Our AI agent highlights differences, similarities, and value propositions to help you choose what's right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Smart Comparison Insights</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <p className="font-semibold">Instant Spec Analysis</p>
                  <p className="text-sm text-muted-foreground">Get detailed breakdowns of materials, dimensions, and specifications</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <p className="font-semibold">Value for Money</p>
                  <p className="text-sm text-muted-foreground">Understand which product offers the best value based on features</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <p className="font-semibold">Customer Reviews Synthesis</p>
                  <p className="text-sm text-muted-foreground">AI-powered summary of what real customers are saying</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <p className="font-semibold">Personalized Recommendations</p>
                  <p className="text-sm text-muted-foreground">Get AI suggestions on which product suits your needs better</p>
                </div>
              </li>
            </ul>
            
            <Button className="mt-8">
              Compare Products Now
            </Button>
          </div>

          {/* Comparison Table Preview */}
          <div className="rounded-lg border border-border overflow-hidden bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-sm">Feature</th>
                    <th className="px-4 py-3 text-center font-semibold text-sm">Athena</th>
                    <th className="px-4 py-3 text-center font-semibold text-sm">Varanga</th>
                    <th className="px-4 py-3 text-center font-semibold text-sm">Mango</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium">{feature.name}</td>
                      <td className="px-4 py-3 text-sm text-center text-muted-foreground">{feature.athena}</td>
                      <td className="px-4 py-3 text-sm text-center text-muted-foreground">{feature.varanga}</td>
                      <td className="px-4 py-3 text-sm text-center text-muted-foreground">{feature.mango}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCompare;