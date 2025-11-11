import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const MerchantContentOptimizer = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<"diwali" | "eid">("diwali");
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-switch between tabs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedOccasion(prev => prev === "diwali" ? "eid" : "diwali");
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const productData = {
    diwali: {
      image: "/diwali.png",
      title: "Luxe Embroidered Anarkali Set - Festive Gold",
      description: "Celebrate Diwali in radiant style with this hand-embroidered anarkali featuring intricate gold zari work and shimmering sequins. Perfect for family gatherings and festive celebrations.",
      keywords: "Diwali wear, gold anarkali, festive ethnic wear, zari work",
      score: 92,
    },
    eid: {
      image: "/eid.png",
      title: "Elegant Embroidered Anarkali Set - Pearl White",
      description: "Mark Eid celebrations with this graceful anarkali adorned with delicate pearl embroidery and subtle silver accents. Designed for elegant gatherings and special occasions.",
      keywords: "Eid collection, pearl anarkali, modest ethnic wear, elegant festive",
      score: 94,
    },
  };

  const handleOccasionChange = (occasion: "diwali" | "eid") => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedOccasion(occasion);
      setIsAnimating(false);
    }, 300);
  };

  const currentProduct = productData[selectedOccasion];

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right: Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Content Optimizer{" "}
              <span className="text-gradient">Studio</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Upload your product CSV and instantly generate SEO-friendly titles, culturally-aware descriptions, and content that drives conversions.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Scores your existing content quality</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">High scorers: No action required</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Medium scorers: Suggested updates</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Low scorers: Auto-improves if enabled</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Adapts to customer preferences and festivals</span>
              </li>
            </ul>
          </div>

          {/* Left: Dynamic Product Card */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
            {/* Occasion Selector */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleOccasionChange("diwali")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedOccasion === "diwali"
                    ? "bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Diwali Shopper
              </button>
              <button
                onClick={() => handleOccasionChange("eid")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedOccasion === "eid"
                    ? "bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Eid Shopper
              </button>
            </div>

            {/* Product Card */}
            <div
              className={`relative rounded-2xl border-2 border-primary/30 overflow-hidden shadow-2xl bg-gray-900 transition-all duration-300 ${
                isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Score Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  {currentProduct.score}/100
                </div>
              </div>

              {/* Product Image */}
              <div className="h-[500px] relative overflow-hidden bg-gray-800 flex items-center justify-center">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.title}
                  className="h-full w-auto object-contain"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4 bg-gray-900">
                <h3 className="text-xl font-bold text-white">
                  {currentProduct.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* SEO Keywords */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    SEO Keywords
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    {currentProduct.keywords}
                  </p>
                </div>

                {/* AI Badge */}
                <div className="flex items-center gap-2 text-sm text-purple-400 bg-purple-950/50 px-3 py-2 rounded-lg border border-purple-800/30">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium">Optimized by Opura AI</span>
                </div>
              </div>
            </div>

            {/* Helper Text */}
            <p className="text-center text-sm text-gray-400 italic">
              Auto-switching to show content adaptation • Click tabs to control manually
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantContentOptimizer;