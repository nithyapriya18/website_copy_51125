import { TrendingUp, TrendingDown, AlertCircle, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";

const MerchantDashboard = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const maxScroll = container.scrollHeight - container.clientHeight;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      container.scrollTop = scrollPosition;
    };

    const interval = setInterval(autoScroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Dashboard Preview */}
          <div className="order-2 lg:order-1">
            <div 
              ref={scrollContainerRef}
              className="relative rounded-2xl border-2 border-primary/30 overflow-hidden shadow-2xl bg-gray-900 h-[600px] overflow-y-scroll scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] p-6 text-white sticky top-0 z-10">
                <h3 className="text-2xl font-bold mb-2">Weekly Commerce Pulse</h3>
                <p className="text-white/90 text-sm">Oct 26 - Nov 2, 2025</p>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Revenue</p>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-white">$24,580</p>
                    <p className="text-xs text-green-500 mt-1">+18% vs last week</p>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Orders</p>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-white">342</p>
                    <p className="text-xs text-green-500 mt-1">+12% vs last week</p>
                  </div>
                </div>

                {/* Top Performers */}
                <div className="bg-green-900/30 rounded-xl p-4 border border-green-700/50">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    Top Performers
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Embroidered Kurta Set</span>
                      <span className="font-semibold text-white">89 sales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Festive Lehenga</span>
                      <span className="font-semibold text-white">67 sales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Designer Saree</span>
                      <span className="font-semibold text-white">54 sales</span>
                    </div>
                  </div>
                </div>

                {/* Underperforming Products */}
                <div className="bg-orange-900/30 rounded-xl p-4 border border-orange-700/50">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-orange-500" />
                    Needs Attention
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Winter Collection Shawl</span>
                      <span className="text-xs bg-orange-800/50 text-orange-300 px-2 py-1 rounded">Low stock movement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Casual Palazzo Set</span>
                      <span className="text-xs bg-orange-800/50 text-orange-300 px-2 py-1 rounded">High cart abandonment</span>
                    </div>
                  </div>
                </div>

                {/* Customer Searches (Unmet Demand) */}
                <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-700/50">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-500" />
                    What Customers Couldn't Find
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• "Cotton anarkali dress under 2000"</p>
                    <p>• "Plus size festive wear"</p>
                    <p>• "Sustainable ethnic wear"</p>
                  </div>
                </div>

                {/* AI Predictions */}
                <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-700/50">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-purple-500" />
                    AI Recommendations
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Stock up on embroidered kurtas — 40% surge predicted for Diwali week</p>
                    <p>• Consider adding plus-size range based on search trends</p>
                    <p>• Bundle festive items with accessories for 15% higher AOV</p>
                  </div>
                </div>

                {/* Additional metrics for more scrolling content */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Conversion Rate</p>
                    <p className="text-2xl font-bold text-white">3.2%</p>
                    <p className="text-xs text-green-500 mt-1">+0.4%</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Avg Order Value</p>
                    <p className="text-2xl font-bold text-white">$71.87</p>
                    <p className="text-xs text-green-500 mt-1">+5.2%</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">Traffic Sources</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Organic Search</span>
                        <span className="text-white">45%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Social Media</span>
                        <span className="text-white">30%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Direct</span>
                        <span className="text-white">25%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Weekly Commerce{" "}
              <span className="text-gradient">Pulse</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Your store's heartbeat — see last week's key trends, top queries, and products customers couldn't find. Anticipate what they'll want next week.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Track key metrics automatically with real-time updates</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Spot unmet demand early from customer search patterns</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Smart recommendations powered by Opura AI</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary text-xl">✓</span>
                <span className="text-base md:text-lg text-gray-200">Predictive insights for inventory and promotions</span>
              </li>
            </ul>
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

export default MerchantDashboard;