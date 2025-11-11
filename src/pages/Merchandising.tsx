import { Link } from "react-router-dom";
import { Calendar, Target, Zap, ArrowRight, CheckCircle, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Merchandising = () => {
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span className="text-sm text-teal-400">Merchant Suite • Step 3</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Merch <span className="text-gradient">Optimize</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  AI rewrites your product content for every festival and season—automatically. Same product, always relevant.
                </p>
                <Link 
                  to="/#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Content Optimizer Animation */}
              <div className="relative">
                <div className="space-y-6">
                  {/* Occasion Selector */}
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => handleOccasionChange("diwali")}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedOccasion === "diwali"
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-black shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      Diwali Shopper
                    </button>
                    <button
                      onClick={() => handleOccasionChange("eid")}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedOccasion === "eid"
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-black shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      Eid Shopper
                    </button>
                  </div>

                  {/* Product Card */}
                  <div
                    className={`relative rounded-2xl border-2 border-teal-500/30 overflow-hidden shadow-2xl bg-gray-800 transition-all duration-300 ${
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
                    <div className="h-[400px] relative overflow-hidden bg-gray-900 flex items-center justify-center">
                      <img 
                        src={currentProduct.image} 
                        alt={currentProduct.title}
                        className="h-full w-auto object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-6 space-y-4 bg-gray-800">
                      <h3 className="text-lg font-bold text-white">
                        {currentProduct.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
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
                      <div className="flex items-center gap-2 text-sm text-teal-400 bg-teal-950/50 px-3 py-2 rounded-lg border border-teal-800/30">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-medium">Auto-optimized for {selectedOccasion === "diwali" ? "Diwali" : "Eid"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Helper Text */}
                  <p className="text-center text-sm text-gray-400 italic">
                    Same product, different festivals • Content adapts automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automated Content Optimization
              </h2>
              <p className="text-lg text-gray-300">
                Keep your catalog fresh and relevant for every season without lifting a finger.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Event-Driven Content</h3>
                <p className="text-gray-300 mb-4">
                  Descriptions, images, and tags automatically adapt for festivals and seasons.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Pre-loaded festival calendar</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Custom event support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Seasonal keyword optimization</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quality Scoring</h3>
                <p className="text-gray-300 mb-4">
                  AI audits every product and auto-improves low scorers while leaving good ones untouched.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>0-100 quality scores</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>SEO effectiveness analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Bulk CSV optimization</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Merchandising</h3>
                <p className="text-gray-300 mb-4">
                  Collections auto-arrange by season. Slow-movers promoted during relevant events.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Auto product positioning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Seasonal visibility boost</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Strategic promotion timing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Merchants Choose Merch Optimize
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Save Hours Every Week</h3>
                  <p className="text-gray-600">
                    Stop manually rewriting product descriptions for every season and festival. AI handles it automatically while you focus on growing your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Seasonal Sales</h3>
                  <p className="text-gray-600">
                    Products automatically become relevant for upcoming festivals. Better timing means more conversions when customers are ready to buy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Improve SEO Rankings</h3>
                  <p className="text-gray-600">
                    Quality-scored content with optimized keywords helps your products rank higher in search results and attract more organic traffic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Always Optimizing</h3>
                  <p className="text-gray-600">
                    Set it once and let AI continuously improve your catalog. Preview changes or go full autopilot—you're always in control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Catalog?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let AI handle content optimization while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
              >
                <span>View All Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, rgb(20 184 166), rgb(6 182 212));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />
    </div>
  );
};

export default Merchandising;