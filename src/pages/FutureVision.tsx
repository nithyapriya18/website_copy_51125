import { Link } from "react-router-dom";
import { Sparkles, Zap, Brain, Infinity, ArrowRight, Bell } from "lucide-react";
import { useState } from "react";

const FutureVision = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 via-purple-900/20 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-[hsl(var(--peacock-cyan))] rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--peacock-green))] to-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 animate-bounce-slow">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-semibold">Coming Soon</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Future <span className="text-gradient">Vision</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              The next generation of AI commerce is on the horizon
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              We're pushing the boundaries of what's possible in e-commerce. Our innovation lab is working on breakthrough technologies that will redefine online shopping.
            </p>

            {/* Email Subscription */}
            <div className="max-w-md mx-auto">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--peacock-cyan))]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <Bell className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">You're on the list! We'll keep you posted.</span>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-3">Be the first to know when these innovations launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We're Building
              </h2>
              <p className="text-xl text-gray-300">
                A glimpse into the future of intelligent commerce
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Innovation 1 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[hsl(var(--peacock-cyan))]/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--peacock-cyan))]/20 transition-colors">
                  <Brain className="w-8 h-8 text-[hsl(var(--peacock-cyan))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hyper-Personalization Engine</h3>
                <p className="text-gray-300 mb-4">
                  AI that creates a unique shopping experience for every individual customer, adapting in real-time to behavior, preferences, and context.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Real-time Adaptation</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">1:1 Personalization</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Context-Aware</span>
                </div>
              </div>

              {/* Innovation 2 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Augmented Reality Shopping</h3>
                <p className="text-gray-300 mb-4">
                  Try before you buy with immersive AR experiences. Visualize products in your space, see how clothes fit, and interact with items in 3D.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Virtual Try-On</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">3D Visualization</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Spatial Commerce</span>
                </div>
              </div>

              {/* Innovation 3 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[hsl(var(--peacock-green))]/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[hsl(var(--peacock-green))]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--peacock-green))]/20 transition-colors">
                  <Infinity className="w-8 h-8 text-[hsl(var(--peacock-green))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Store Operations</h3>
                <p className="text-gray-300 mb-4">
                  AI that runs your entire store autonomously—from inventory management to pricing, marketing campaigns to customer service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Auto-Optimization</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Smart Automation</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Zero-Touch</span>
                </div>
              </div>

              {/* Innovation 4 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Voice & Multimodal Commerce</h3>
                <p className="text-gray-300 mb-4">
                  Shop naturally using voice, gestures, or even thoughts. Our multimodal AI understands any input method you prefer.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Voice Shopping</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Gesture Control</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">Multi-Input</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Road Ahead
              </h2>
              <p className="text-xl text-gray-300">
                Our innovation roadmap for the next 18 months
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[hsl(var(--peacock-cyan))]/20 border-2 border-[hsl(var(--peacock-cyan))] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--peacock-cyan))] font-bold">Q1</span>
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Early 2026</h3>
                  <p className="text-gray-300">Beta testing of Hyper-Personalization Engine with select partners</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 border-2 border-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">Q2</span>
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Mid 2026</h3>
                  <p className="text-gray-300">Launch of AR Shopping experiences for fashion and home decor</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[hsl(var(--peacock-green))]/20 border-2 border-[hsl(var(--peacock-green))] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--peacock-green))] font-bold">Q3</span>
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Late 2026</h3>
                  <p className="text-gray-300">Autonomous Store Operations pilot program begins</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500/20 border-2 border-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold">Q4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Early 2027</h3>
                  <p className="text-gray-300">Voice & Multimodal Commerce integration with major platforms</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want Early Access?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our innovation partner program and be among the first to test these groundbreaking features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>Become an Innovation Partner</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <span>See Current Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default FutureVision;