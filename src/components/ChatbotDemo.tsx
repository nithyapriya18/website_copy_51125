import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  delay: number;
  isProductGrid?: boolean;
  isComparison?: boolean;
  products?: any[];
}

interface ChatbotDemoProps {
  title: string;
  description: string;
  messages: ChatMessage[];
}

const ChatbotDemo: React.FC<ChatbotDemoProps> = ({ title, description, messages }) => {
  const [displayedMessages, setDisplayedMessages] = useState<ChatMessage[]>([]);
  const [loop, setLoop] = useState(0);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    let loopTimer: NodeJS.Timeout;

    messages.forEach((message) => {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, message]);
      }, message.delay);
      timers.push(timer);
    });

    const totalDelay = Math.max(...messages.map(m => m.delay)) + 5000;
    loopTimer = setTimeout(() => {
      setDisplayedMessages([]);
      setLoop(prev => prev + 1);
    }, totalDelay);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(loopTimer);
    };
  }, [messages, loop]);

  const productImages = [
    '/pink.png',
    '/black.png',
    '/products/mango.jpg'
  ];

  return (
    <div className="relative w-full">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 h-96 md:h-[500px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4 border-b border-slate-600 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
            <p className="text-slate-400 text-xs">{description}</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50 scroll-smooth"
        >
          {displayedMessages.map((message, idx) => (
            <div
              key={`${loop}-${message.id}`}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              {message.sender === 'bot' && message.isProductGrid ? (
                // Product Grid View
                <div className="w-full overflow-x-auto px-2">
                  <div className="flex gap-3 pb-2">
                    {message.products?.map((product, productIdx) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg overflow-hidden flex-shrink-0 w-48 shadow-md hover:shadow-lg transition-all"
                      >
                        <div className="w-full h-48 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                          <img
                            src={productImages[productIdx]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="bg-[#20d9a3] text-black px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                              <span>★</span>
                              <span>{product.rating}</span>
                            </div>
                            {product.discount > 0 && (
                              <div className="bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                                -{product.discount}%
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm truncate">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {product.description}
                            </p>
                          </div>
                          <div className="flex gap-1 flex-wrap">
                            {product.tags?.slice(0, 2).map((tag: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs line-through text-gray-400">
                              ₹{product.originalPrice}
                            </span>
                            <span className="font-bold text-[#20d9a3] text-sm">
                              ₹{product.price}
                            </span>
                          </div>
                          <button className="w-full bg-[#20d9a3] text-black px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#20d9a3]/90 transition-all">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : message.sender === 'bot' && message.isComparison ? (
                // Comparison View
                <div className="w-full max-w-2xl bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-200">
                  <h4 className="text-purple-700 font-bold text-center mb-3 text-base">Product Comparison</h4>
                  
                  {/* Product Images */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="border-2 border-purple-400 rounded-lg overflow-hidden bg-white p-2">
                      <div className="w-full h-24 bg-gradient-to-br from-pink-100 to-purple-50 rounded overflow-hidden flex items-center justify-center">
                        <img 
                          src="/pink.png" 
                          alt="Pink Dress" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <p className="text-center text-xs font-semibold text-gray-800 mt-2">Haute Curry Pink</p>
                    </div>
                    <div className="border-2 border-purple-400 rounded-lg overflow-hidden bg-white p-2">
                      <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-purple-50 rounded overflow-hidden flex items-center justify-center">
                        <img 
                          src="/black.png" 
                          alt="Black Dress" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <p className="text-center text-xs font-semibold text-gray-800 mt-2">Faballey Black</p>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="bg-white rounded-lg p-2.5 text-xs space-y-2">
                    <div className="grid grid-cols-3 gap-2 pb-2 border-b">
                      <div className="font-semibold text-gray-700">Price</div>
                      <div className="text-center">
                        <span className="line-through text-gray-400 text-[10px]">₹2500</span>{" "}
                        <span className="text-purple-600 font-bold">₹999</span>
                      </div>
                      <div className="text-center">
                        <span className="line-through text-gray-400 text-[10px]">₹2500</span>{" "}
                        <span className="text-purple-600 font-bold">₹499</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 pb-2 border-b">
                      <div className="font-semibold text-gray-700">Discount</div>
                      <div className="text-center text-green-600 font-semibold">15%</div>
                      <div className="text-center text-green-600 font-semibold">15%</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pb-2 border-b">
                      <div className="font-semibold text-gray-700">Rating</div>
                      <div className="text-center flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.4</span>
                        <span className="text-gray-500 text-[10px]">(234)</span>
                      </div>
                      <div className="text-center flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.1</span>
                        <span className="text-gray-500 text-[10px]">(143)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pb-2 border-b">
                      <div className="font-semibold text-gray-700">Material</div>
                      <div className="text-center text-gray-600">Chiffon mesh</div>
                      <div className="text-center text-gray-600">Netted</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pb-2 border-b">
                      <div className="font-semibold text-gray-700">Quality</div>
                      <div className="text-center text-gray-600">Premium</div>
                      <div className="text-center text-gray-600">Good</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-semibold text-gray-700">Fit</div>
                      <div className="text-center text-gray-600">A-line</div>
                      <div className="text-center text-gray-600">Body-hug</div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-2 bg-purple-100 rounded-lg p-2 text-xs text-gray-700 space-y-1">
                    <p><span className="font-semibold">Pink:</span> Classic, versatile, multiple occasions</p>
                    <p><span className="font-semibold">Black:</span> Elegant, formal occasions</p>
                  </div>
                </div>
              ) : (
                // Regular Text Message
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#20d9a3] text-black rounded-br-none'
                      : 'bg-slate-700 text-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-slate-800 border-t border-slate-700 p-3 flex gap-2 flex-shrink-0">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-slate-700 text-white rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#20d9a3]"
            disabled
          />
          <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.488 5.951 1.488a1 1 0 001.169-1.409l-7-14z" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatbotDemo;