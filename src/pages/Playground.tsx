import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Search, MessageCircle, LayoutGrid, TrendingUp } from "lucide-react";

const Playground = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Welcome to the AI Commerce Playground! I'm your demo assistant. Try asking me to:\n\n🔍 **Search for products** - \"Find blue summer dresses under $50\"\n💬 **Get shopping help** - \"Compare iPhone 14 vs iPhone 15\"\n📊 **See merchandising** - \"Show me how to optimize my homepage\"\n📈 **View analytics** - \"What are my trending products?\"\n\nWhat would you like to explore first?",
      feature: null
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
  const chatContainer = document.getElementById('chat-messages');
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
};

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Demo responses based on keywords
  const getDemoResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Search/Discovery responses
    if (message.includes("search") || message.includes("find") || message.includes("looking for")) {
      return {
        content: "🔍 **Intelligent Discovery Demo**\n\nBased on your search, here's what our AI found:\n\n**Top Results:**\n• Blue Maxi Dress - $45 ⭐ 4.8/5\n• Floral Summer Dress - $38 ⭐ 4.6/5\n• Ocean Blue Sundress - $42 ⭐ 4.9/5\n\nOur AI understood:\n✓ Color preference: Blue\n✓ Season: Summer\n✓ Price range: Under $50\n✓ Style intent: Casual/dressy\n\nNotice how I didn't just match keywords - I understood what you were *really* looking for!\n\nTry another search or ask me something else!",
        feature: "discovery"
      };
    }

    // Shopping Assistant responses
    if (message.includes("compare") || message.includes("difference") || message.includes("which") || message.includes("help me choose")) {
      return {
        content: "💬 **Shopping Assistant Demo**\n\n**iPhone 14 vs iPhone 15 Comparison:**\n\n📱 **iPhone 14**\n• A15 Bionic chip\n• Dual camera (12MP)\n• Starting at $699\n• Battery: Up to 20 hours\n\n📱 **iPhone 15**\n• A16 Bionic chip (15% faster)\n• Advanced dual camera (48MP main)\n• Starting at $799\n• Battery: Up to 26 hours\n• USB-C charging (new!)\n\n**💡 My Recommendation:**\nIf you want the latest features and better camera quality, go with iPhone 15. If you're budget-conscious and current features work for you, iPhone 14 is still excellent!\n\nWant me to compare other products or answer specific questions?",
        feature: "assistant"
      };
    }

    // Merchandising responses
    if (message.includes("merchandis") || message.includes("optimize") || message.includes("layout") || message.includes("arrange") || message.includes("homepage")) {
      return {
        content: "📊 **Merch Optimize Demo**\n\n**AI Optimization Recommendations:**\n\n🎯 **Homepage Layout**\n• Move bestsellers to hero section (+15% conversions)\n• Feature seasonal items in slot 2 (+22% CTR)\n• Add \"Trending Now\" section (+18% engagement)\n\n💰 **Promotion Strategy**\n• Bundle deal: Camera + Lens (predicted +$45 AOV)\n• Flash sale: Winter clearance (move 80% inventory)\n• Loyalty reward: 15% off for repeat buyers\n\n📦 **Inventory Intelligence**\n• 12 items low stock - prioritize visibility\n• 5 items slow moving - suggest discount\n• 8 items high demand - restock alert\n\n**Result:** Estimated +23% revenue increase this month!\n\nWant to see analytics insights next?",
        feature: "merchandising"
      };
    }

    // Analytics responses
    if (message.includes("analytics") || message.includes("trend") || message.includes("data") || message.includes("forecast") || message.includes("insight")) {
      return {
        content: "📈 **Trend Sight Demo**\n\n**Your Business Intelligence Summary:**\n\n📊 **Top Trends This Week**\n• Wireless earbuds: ↑ 45% searches\n• Smart watches: ↑ 32% conversions\n• Laptop accessories: ↑ 28% page views\n\n🎯 **Customer Insights**\n• Avg. order value: $127 (↑ $12 from last month)\n• Top segment: Tech enthusiasts (35-44 age)\n• Peak shopping: Tue-Thu, 7-9 PM\n\n🔮 **Demand Forecast (Next 30 Days)**\n• Gaming laptops: High demand expected\n• Home office: Moderate growth\n• Fitness tech: Seasonal spike incoming\n\n💡 **AI Recommendations**\n1. Stock up on wireless earbuds (+300 units)\n2. Create gaming laptop bundle\n3. Launch fitness tech campaign next week\n\nWant to explore any specific metric?",
        feature: "analytics"
      };
    }

    // Default helpful response
    return {
      content: "I can help you explore our AI features! Try asking me about:\n\n🔍 **Product Search** - \"Find wireless headphones\"\n💬 **Product Comparison** - \"Compare MacBook Air vs Pro\"\n📊 **Store Optimization** - \"How can I optimize my homepage?\"\n📈 **Business Analytics** - \"Show me trending products\"\n\nWhat would you like to try?",
      feature: null
    };
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      role: "user",
      content: inputValue,
      feature: null
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Get demo response
    const response = getDemoResponse(inputValue);
    
    setMessages(prev => [...prev, {
      role: "assistant",
      content: response.content,
      feature: response.feature
    }]);
    
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getFeatureIcon = (feature) => {
    switch(feature) {
      case "discovery": return <Search className="w-4 h-4" />;
      case "assistant": return <MessageCircle className="w-4 h-4" />;
      case "merchandising": return <LayoutGrid className="w-4 h-4" />;
      case "analytics": return <TrendingUp className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const getFeatureColor = (feature) => {
    switch(feature) {
      case "discovery": return "teal";
      case "assistant": return "teal";
      case "merchandising": return "cyan";
      case "analytics": return "cyan";
      default: return "gray";
    }
  };

  const quickPrompts = [
    { text: "Find blue dresses under $50", icon: Search },
    { text: "Compare two products", icon: MessageCircle },
    { text: "Optimize my store layout", icon: LayoutGrid },
    { text: "Show trending products", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-400">Interactive Demo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Try Our AI Platform
            </h1>
            <p className="text-xl text-gray-300">
              Test all four features in real-time. No signup required.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="pb-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full">
                <Search className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-400">Discovery</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full">
                <MessageCircle className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-400">Assistant</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <LayoutGrid className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Merchandising</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Analytics</span>
              </div>
            </div>

            {/* Chat Container */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Messages Area */}
              <div className="h-[600px] overflow-y-auto p-6 space-y-6 scroll-smooth" id="chat-messages">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className={`w-10 h-10 rounded-full bg-${getFeatureColor(message.feature)}-500/10 flex items-center justify-center flex-shrink-0`}>
                        {getFeatureIcon(message.feature)}
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-black"
                          : "bg-gray-700/50 text-gray-100"
                      }`}
                    >
                      <div className="whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </div>
                    </div>

                    {message.role === "user" && (
                      <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-semibold">You</span>
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 animate-pulse text-teal-400" />
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl px-6 py-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="px-6 py-3 bg-gray-900/50 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, index) => {
                    const Icon = prompt.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setInputValue(prompt.text)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-all border border-gray-600"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{prompt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 bg-gray-900/50 border-t border-gray-700">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about our AI features..."
                    className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold rounded-xl transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">Send</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                Impressed? See how this works for your actual store.
              </p>
              <a
                href="/#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Playground;