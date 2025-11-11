import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, AlertCircle, Lightbulb, BarChart3, Brain, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const Analytics = () => {
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
                  <span className="text-sm text-teal-400">Merchant Suite • Step 4</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Trend<span className="text-gradient">Sight</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Your store's weekly heartbeat. Track trends, spot unmet demand, and anticipate what customers will want next with AI-powered predictive analytics.
                </p>
                <Link 
                  to="/#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Dashboard Animation */}
              <div className="relative">
                <div 
                  ref={scrollContainerRef}
                  className="relative rounded-2xl border-2 border-teal-500/30 overflow-hidden shadow-2xl bg-gray-900 h-[500px] overflow-y-scroll"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-black sticky top-0 z-10">
                    <h3 className="text-lg font-bold mb-1">Weekly Commerce Pulse</h3>
                    <p className="text-sm opacity-90">Oct 26 - Nov 2, 2025</p>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-gray-400 uppercase">Revenue</p>
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        </div>
                        <p className="text-xl font-bold text-white">$24,580</p>
                        <p className="text-xs text-green-500 mt-1">+18%</p>
                      </div>

                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-gray-400 uppercase">Orders</p>
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        </div>
                        <p className="text-xl font-bold text-white">342</p>
                        <p className="text-xs text-green-500 mt-1">+12%</p>
                      </div>
                    </div>

                    {/* Top Performers */}
                    <div className="bg-green-900/30 rounded-lg p-3 border border-green-700/50">
                      <h4 className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        Top Performers
                      </h4>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between text-gray-300">
                          <span>Embroidered Kurta</span>
                          <span className="font-semibold text-white">89 sales</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Festive Lehenga</span>
                          <span className="font-semibold text-white">67 sales</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Designer Saree</span>
                          <span className="font-semibold text-white">54 sales</span>
                        </div>
                      </div>
                    </div>

                    {/* Underperforming */}
                    <div className="bg-orange-900/30 rounded-lg p-3 border border-orange-700/50">
                      <h4 className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-orange-500" />
                        Needs Attention
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Winter Shawl</span>
                          <span className="text-xs bg-orange-800/50 text-orange-300 px-2 py-0.5 rounded">Low stock</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Palazzo Set</span>
                          <span className="text-xs bg-orange-800/50 text-orange-300 px-2 py-0.5 rounded">High abandon</span>
                        </div>
                      </div>
                    </div>

                    {/* Unmet Demand */}
                    <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-700/50">
                      <h4 className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-blue-500" />
                        Customers Couldn't Find
                      </h4>
                      <div className="space-y-1 text-xs text-gray-300">
                        <p>• "Cotton anarkali under 2000"</p>
                        <p>• "Plus size festive wear"</p>
                        <p>• "Sustainable ethnic wear"</p>
                      </div>
                    </div>

                    {/* AI Recommendations */}
                    <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-700/50">
                      <h4 className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-purple-500" />
                        AI Recommendations
                      </h4>
                      <div className="space-y-1 text-xs text-gray-300">
                        <p>• Stock up kurtas — 40% surge predicted</p>
                        <p>• Add plus-size range per trends</p>
                        <p>• Bundle items for 15% higher AOV</p>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <p className="text-xs text-gray-400 uppercase mb-1">Conversion</p>
                        <p className="text-xl font-bold text-white">3.2%</p>
                        <p className="text-xs text-green-500">+0.4%</p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <p className="text-xs text-gray-400 uppercase mb-1">Avg Order</p>
                        <p className="text-xl font-bold text-white">$71.87</p>
                        <p className="text-xs text-green-500">+5.2%</p>
                      </div>
                    </div>

                    {/* Traffic Sources */}
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                      <h4 className="font-semibold text-white text-sm mb-3">Traffic Sources</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Organic</span>
                            <span className="text-white">45%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Social</span>
                            <span className="text-white">30%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Direct</span>
                            <span className="text-white">25%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                Intelligence That Drives Decisions
              </h2>
              <p className="text-lg text-gray-300">
                Stop guessing. Start knowing. AI-powered analytics that predict what's next.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Weekly Commerce Pulse</h3>
                <p className="text-gray-300 mb-4">
                  Automated weekly reports showing top performers, underperformers, and what customers couldn't find.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Key metrics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Performance tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Unmet demand detection</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Insights</h3>
                <p className="text-gray-300 mb-4">
                  Deep behavioral analytics revealing search patterns, cart abandonment reasons, and purchase drivers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Search trend analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Behavior patterns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Traffic source breakdown</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Recommendations</h3>
                <p className="text-gray-300 mb-4">
                  Predictive insights for inventory planning, promotions, and product bundling to maximize revenue.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Demand predictions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Stocking recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Bundle opportunities</span>
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
              Why Merchants Choose TrendSight
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Spot Opportunities Before Competitors</h3>
                  <p className="text-gray-600">
                    See what customers are searching for but can't find. Fill those gaps and capture untapped demand before anyone else.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Inventory with Confidence</h3>
                  <p className="text-gray-600">
                    AI predictions help you stock the right products at the right time, reducing overstock and preventing costly stockouts.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Understand Your Performance</h3>
                  <p className="text-gray-600">
                    Weekly pulse reports give you clear visibility into what's working and what needs attention, so you can act fast.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Make Data-Driven Decisions</h3>
                  <p className="text-gray-600">
                    Stop relying on gut feelings. Every decision backed by real data and AI-powered recommendations that actually work.
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
              Ready to See What's Coming?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop guessing what customers want. Know what they'll buy before they do.
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

export default Analytics;