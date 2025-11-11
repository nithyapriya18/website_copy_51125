// src/pages/Discovery.tsx
import { Link } from "react-router-dom";
import { Search, GitCompare, Tag, TrendingUp, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import ChatbotDemo from "../components/ChatbotDemo";

const Discovery = () => {
  // Message configurations for demo
  const personalizedRecMessages = [
    {
      id: 1,
      text: "Looking for everyday sneakers under ₹5,000",
      sender: 'user' as const,
      delay: 500
    },
    {
      id: 2,
      text: "Got it! Finding comfortable sneakers for daily wear within your budget.",
      sender: 'bot' as const,
      delay: 1500
    },
    {
      id: 3,
      text: "Here are your personalized recommendations:",
      sender: 'bot' as const,
      delay: 2500
    },
    {
      id: 4,
      text: "",
      sender: 'bot' as const,
      delay: 3500,
      isProductGrid: true,
      products: [
        {
          id: 1,
          name: "Stride Lite Pro",
          description: "Lightweight daily comfort sneakers",
          price: 3499,
          originalPrice: 4999,
          rating: 4.5,
          discount: 30,
          tags: ["Breathable", "Cushioned"]
        },
        {
          id: 2,
          name: "Cloud Flex Walk",
          description: "Memory foam everyday shoes",
          price: 4299,
          originalPrice: 5499,
          rating: 4.7,
          discount: 22,
          tags: ["Memory Foam", "Flexible"]
        },
        {
          id: 3,
          name: "Daily Boost Runner",
          description: "All-day comfort sneakers",
          price: 3899,
          originalPrice: 4899,
          rating: 4.6,
          discount: 20,
          tags: ["Ergonomic", "Durable"]
        }
      ]
    }
  ];

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
                  Discover <span className="text-gradient">Pro</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Your store assistant for every customer. Helps shoppers find exactly what they're looking for with smart recommendations, instant comparisons, and personalized guidance.
                </p>
                <Link 
                  to="/#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Chat Demo */}
              <div className="relative">
                <ChatbotDemo
                  title="Smart Discovery"
                  description="AI-powered recommendations"
                  messages={personalizedRecMessages}
                />
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
                Complete Shopping Assistant
              </h2>
              <p className="text-lg text-gray-300">
                Guide every customer to the perfect product with AI that understands intent, compares options, and finds the best deals.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Recommendations</h3>
                <p className="text-gray-300 mb-4">
                  Understands what customers really want and shows the perfect products instantly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Natural language search</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Budget-aware suggestions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Personalized ranking</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <GitCompare className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Product Comparison</h3>
                <p className="text-gray-300 mb-4">
                  Shows clear differences side-by-side so customers feel confident choosing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Visual side-by-side</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Key differences highlighted</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Best option recommended</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Tag className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deal Finder</h3>
                <p className="text-gray-300 mb-4">
                  Shows similar products and better deals automatically to help customers save money.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Similar product suggestions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Active discount alerts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Bundle recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sales Insights</h3>
                <p className="text-gray-300 mb-4">
                  See what's selling, what customers want, and how to grow your sales.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Best-seller tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Customer search trends</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Actionable recommendations</span>
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
        Why Merchants Choose Discover Pro
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Increase Conversions</h3>
            <p className="text-gray-600">
              Customers find products faster and buy with confidence.
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Reduce Cart Abandonment</h3>
            <p className="text-gray-600">
              Answer questions instantly before customers leave.
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Works 24/7</h3>
            <p className="text-gray-600">
              Personal shopper for every customer, anytime.
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Setup</h3>
            <p className="text-gray-600">
              Live in minutes, AI learns your catalog in 24 hours.
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
              Ready to Transform Your Store?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Help every customer find exactly what they need and watch your sales grow.
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

export default Discovery;