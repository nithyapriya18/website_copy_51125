import { Link } from "react-router-dom";
import { Headphones, Package, RotateCcw, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const chatSequence = [
    { role: "user", text: "Hi, I received my order but one item is damaged" },
    { role: "assistant", text: "I'm sorry to hear that! Let me help you. What's your order number?" },
    { role: "user", text: "It's #ORD-2024-98765" },
    { role: "assistant", text: "Found it! I've initiated a replacement for your Blue Sweater. It'll arrive in 2 business days with expedited shipping. I've also added a $15 credit to your account." },
    { role: "user", text: "Wow, that was fast! Thank you!" }
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
    }, 1800);

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
                  Support <span className="text-gradient">Concierge</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  24/7 intelligent customer support that handles order tracking, returns, FAQs, and issue resolution instantly. Human-quality service at machine speed.
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
                      <Headphones className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Support Concierge</div>
                      <div className="text-xs text-gray-400">Available 24/7 • Avg response: 5s</div>
                    </div>
                  </div>

                  <div className="space-y-4 min-h-[320px]">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex gap-3 animate-slide-up ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {msg.role === 'assistant' && (
                          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Headphones className="w-4 h-4 text-black" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
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
                      placeholder="Describe your issue..."
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
                Always-On Customer Support
              </h2>
              <p className="text-lg text-gray-300">
                Resolve issues instantly with AI that understands context, accesses order data, and takes action automatically.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Package className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Order Tracking & Updates</h3>
                <p className="text-gray-300 mb-4">
                  Instant order status, shipping updates, and delivery tracking. Customers get real-time answers without leaving the chat.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Real-time tracking updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Proactive delivery alerts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Shipment issue detection</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <RotateCcw className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Returns & Exchanges</h3>
                <p className="text-gray-300 mb-4">
                  Process returns, initiate exchanges, and generate return labels automatically. Hassle-free returns that build trust.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>One-click return initiation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Automatic label generation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Instant exchange processing</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Headphones className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">FAQs & Issue Resolution</h3>
                <p className="text-gray-300 mb-4">
                  Answer common questions instantly and resolve complex issues with context-aware problem-solving and escalation when needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Instant FAQ responses</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Context-aware solutions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Smart escalation to humans</span>
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
              Why Merchants Choose Support Concierge
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dramatically Reduce Support Costs</h3>
                  <p className="text-gray-600">
                    Handle unlimited customer inquiries simultaneously without hiring additional support staff. Scale effortlessly during peak seasons.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning-Fast Response Times</h3>
                  <p className="text-gray-600">
                    Customers get instant answers 24/7, no waiting in queues. Faster resolution leads to higher satisfaction and loyalty.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Resolve Most Issues Automatically</h3>
                  <p className="text-gray-600">
                    AI handles the majority of common issues independently, freeing your team to focus on complex cases that truly need human attention.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Build Customer Trust & Loyalty</h3>
                  <p className="text-gray-600">
                    Quick, empathetic, and effective support builds lasting relationships. Customers return because they know you've got their back.
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
              Ready to Transform Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Deliver instant, intelligent support that solves problems, builds trust, and scales effortlessly.
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