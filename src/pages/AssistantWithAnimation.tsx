import { Link } from "react-router-dom";
import { MessageCircle, Zap, TrendingUp, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const chatSequence = [
    { role: "user", text: "Which iPhone should I buy?" },
    { role: "assistant", text: "I can help! What's your budget and main use case?" },
    { role: "user", text: "Around $800, mostly photos" },
    { role: "assistant", text: "Perfect! iPhone 15 has the best camera in that range. Want to compare with iPhone 14?" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < chatSequence.length) {
          setMessages(chatSequence.slice(0, prev + 1));
          return prev + 1;
        } else {
          setTimeout(() => {
            setMessages([]);
            return 0;
          }, 2000);
          return 0;
        }
      });
    }, 1500);

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
                  <span className="text-sm text-teal-400">Customer Suite • Step 2</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Shopping <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Assistant</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Give every customer their own personal shopping assistant. Answer questions, provide recommendations, and guide purchases with conversational AI that feels human.
                </p>
                <Link 
                  to="/#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Animated Chat Demo */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">AI Shopping Assistant</div>
                      <div className="text-xs text-gray-400">Online now</div>
                    </div>
                  </div>

                  <div className="space-y-4 min-h-[300px]">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex gap-3 animate-slide-up ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {msg.role === 'assistant' && (
                          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-4 h-4 text-black" />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                            msg.role === 'user'
                              ? 'bg-gray-700 text-white'
                              : 'bg-teal-500/20 text-white border border-teal-500/30'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                        </div>
                        {msg.role === 'user' && (
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-semibold">U</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 bg-gray-700/30 rounded-xl p-3">
                    <input
                      type="text"
                      placeholder="Type your question..."
                      className="flex-1 bg-transparent text-white text-sm outline-none"
                      readOnly
                    />
                    <button className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>
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
                24/7 Personal Shopping Experience
              </h2>
              <p className="text-lg text-gray-300">
                Every customer gets instant, intelligent assistance that increases confidence and drives conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conversational AI</h3>
                <p className="text-gray-300 mb-4">
                  Natural, human-like conversations that answer questions, explain features, and help customers make informed decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Natural language understanding</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Context-aware responses</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Multi-turn conversations</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Product Comparisons</h3>
                <p className="text-gray-300 mb-4">
                  Side-by-side product analysis that highlights key differences and helps customers choose the perfect option.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Feature comparison tables</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Pros and cons analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Recommendations</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered suggestions based on customer preferences, browsing behavior, and purchase history.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Behavioral personalization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Cross-sell opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Bundle suggestions</span>
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
              Why Merchants Choose Shopping Assistant
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Reduce Cart Abandonment</h3>
                <p className="text-gray-300">
                  Answer customer questions instantly before they leave. Provide the information and confidence they need to complete their purchase.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Increase Average Order Value</h3>
                <p className="text-gray-300">
                  Discover Pro and cross-sell suggestions naturally increase basket size without feeling pushy or salesy.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Scale Customer Support</h3>
                <p className="text-gray-300">
                  Handle unlimited customer inquiries simultaneously while maintaining consistent, high-quality assistance 24/7.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Learn From Every Interaction</h3>
                <p className="text-gray-300">
                  The AI continuously improves from customer conversations, becoming more helpful and accurate over time.
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
              Ready to Provide VIP Shopping Experiences?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Give every customer personalized assistance that drives confidence, conversions, and loyalty.
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
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
};

export default Assistant;