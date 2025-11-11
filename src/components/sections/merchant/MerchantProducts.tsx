import { BarChart3, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const merchantTools = [
  {
    icon: BarChart3,
    name: "Weekly Commerce Pulse",
    description:
      "Your store’s heartbeat — see last week’s key trends, top queries, and products customers couldn’t find. Anticipate what they’ll want next week.",
    highlights: [
      "Track key metrics automatically",
      "Spot unmet demand early",
      "Smart recommendations powered by Opura AI",
    ],
  },
  {
    icon: FileText,
    name: "Content Optimizer Studio",
    description:
      "Upload your product CSV and instantly generate SEO-friendly titles, LLM-ready descriptions, and images that drive conversions.",
    highlights: [
      "Scores your existing content",
      "High scorers: No action required",
      "Medium scorers: Suggested updates",
      "Low scorers: Auto-improves if enabled",
    ],
  },
];

const MerchantProducts = () => {
  return (
    <section className="py-24 md:py-32 relative bg-white">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
            Merchant Intelligence Suite
          </h2>
          <p className="text-lg md:text-xl text-black/70">
            From weekly commerce insights to smart content generation — equip
            your teams to act faster and smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {merchantTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card
                key={index}
                className="group relative bg-gray-50 border border-[hsl(var(--peacock-cyan))/40] rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-[hsl(var(--peacock-cyan))] transition-all duration-300 h-full"
              >
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center text-center">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold text-black mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-black/70 text-sm md:text-base max-w-md">
                      {tool.description}
                    </p>
                  </div>

                  <ul className="text-black/70 text-sm md:text-base space-y-2 list-disc list-inside text-left mt-4">
                    {tool.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MerchantProducts;
