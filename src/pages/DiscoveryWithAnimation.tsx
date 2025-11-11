import { Link } from "react-router-dom";
import { Search, Image, Filter, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Discovery = () => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const fullText = "blue summer dress under $50";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setSearchText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setShowResults(true);
        setTimeout(() => {
          currentIndex = 0;
          setSearchText("");
          setShowResults(false);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
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
                  <span className="text-sm text-teal-400">Customer Suite • Step 1</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Intelligent <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Discovery</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Transform how customers find products with AI-powered search that understands intent, not just keywords. Deliver the perfect product match every single time.
                </p>
                <Link 
                  to="/#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Animated Demo */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                  {/* Search Bar */}
                  <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl p-4 mb-6">
                    <Search className="w-5 h-5 text-teal-400" />
                    <input
                      type="text"
                      value={searchText}
                      readOnly
                      placeholder="Search for products..."
                      className="flex-1 bg-transparent text-white text-sm outline-none"
                    />
                  </div>

                  {/* Results */}
                  {showResults && (
                    <div className="space-y-3 animate-fade-in">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-3 bg-gray-700/30 rounded-lg p-3 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                          <div className="w-16 h-16 bg-teal-500/20 rounded-lg flex items-center justify-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded"></div>
                          </div>
                          <div className="flex-1">
                            <div className="h-3 bg-gray-600 rounded w-3/4 mb-2"></div>
                            <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="text-xs text-teal-400">★ 4.8</div>
                              <div className="h-2 bg-teal-500 rounded w-12"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!showResults && (
                    <div className="space-y-3">
                      <div className="h-20 bg-gray-700/20 rounded-lg animate-pulse"></div>
                      <div className="h-20 bg-gray-700/20 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-20 bg-gray-700/20 rounded-lg animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  )}
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
                Search That Actually Works
              </h2>
              <p className="text-lg text-gray-300">
                No more "no results found." Our AI understands what customers mean, not just what they type.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Search</h3>
                <p className="text-gray-300 mb-4">
                  Customers can search conversationally. "Blue summer dress under $50" returns perfect matches, not keyword soup.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Intent-based matching</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Synonym understanding</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Typo correction</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Image className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visual Discovery</h3>
                <p className="text-gray-300 mb-4">
                  Upload a photo or screenshot. Our AI instantly finds similar products in your catalog with matching style, color, and features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Image similarity search</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Style recognition</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Color matching</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Filter className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Filters</h3>
                <p className="text-gray-300 mb-4">
                  Dynamic filters adapt to each search query and customer behavior, showing only relevant options that matter.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Context-aware filtering</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Behavioral adaptation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Intelligent suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Merchants Choose Intelligent Discovery
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Reduce Zero-Result Searches</h3>
                <p className="text-gray-300">
                  Eliminate frustrating "no results found" pages. Our AI understands what customers mean and always finds relevant alternatives.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Increase Discovery Time</h3>
                <p className="text-gray-300">
                  Help customers find products faster. Faster discovery means more time exploring your catalog and higher conversion rates.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Surface Long-Tail Inventory</h3>
                <p className="text-gray-300">
                  Make your entire catalog discoverable. Products that were hard to find now appear in relevant search results automatically.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Works Out of the Box</h3>
                <p className="text-gray-300">
                  No complex setup or training required. Our AI learns from your catalog and starts delivering results immediately.
                </p>
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
              Ready to Transform Product Discovery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Help your customers find exactly what they're looking for with AI-powered intelligent discovery.
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-in;
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
};

export default Discovery;