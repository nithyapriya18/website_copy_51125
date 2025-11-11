import ChatbotDemo from '@/components/ChatbotDemo';

const ProductsSupport = () => {
  const supportMessages = [
    { id: 1, text: "Hi, I received my order but one item is damaged", sender: 'user' as const, delay: 500 },
    { id: 2, text: "I'm sorry to hear that! Let me help you right away. Can I have your order number?", sender: 'bot' as const, delay: 1500 },
    { id: 3, text: "Sure, it's #ORD-2024-98765", sender: 'user' as const, delay: 2500 },
    { id: 4, text: "Found your order! I can see the Blue Sweater was marked as delivered. I'm initiating a replacement right now.", sender: 'bot' as const, delay: 3800 },
    { id: 5, text: "The replacement will arrive within 2 business days with expedited shipping. I've also applied a $15 credit to your account for the inconvenience.", sender: 'bot' as const, delay: 5000 },
    { id: 6, text: "Wow, that was fast! Thank you so much", sender: 'user' as const, delay: 6500 },
    { id: 7, text: "You're welcome! Is there anything else I can help with today?", sender: 'bot' as const, delay: 7500 },
  ];

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Support Concierge Demo */}
          <ChatbotDemo 
            title="Support Concierge"
            description="Customer support in real-time"
            messages={supportMessages}
          />

          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Support Concierge</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              24/7 intelligent support that handles inquiries, orders, and customer service with human-like understanding. Resolves issues instantly while maintaining the warmth of human interaction.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Instant issue resolution & replacements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Real-time order tracking and updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Natural language understanding</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Multi-channel support availability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Context-aware problem solving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSupport;