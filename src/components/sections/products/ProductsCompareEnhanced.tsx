import ChatbotDemo from '@/components/ChatbotDemo';

const ProductsCompareEnhanced = () => {
  const compareMessages = [
    { 
      id: 1, 
      text: "Can you compare the Athena and Varanga dresses for me?", 
      sender: 'user' as const, 
      delay: 500 
    },
    { 
      id: 2, 
      text: "Of course! Let me pull up a detailed comparison for you.", 
      sender: 'bot' as const, 
      delay: 1500 
    },
    { 
      id: 3, 
      text: "Athena: Premium satin, elegant draping - ₹999 (4.4★)\nVaranga: Comfortable A-line, versatile - ₹499 (4.2★)", 
      sender: 'bot' as const, 
      delay: 2500
    },
    { 
      id: 4, 
      text: "Athena excels in formal wear & elegance. Varanga shines in comfort & everyday versatility. Both have excellent fit ratings.", 
      sender: 'bot' as const, 
      delay: 3500 
    },
    { 
      id: 5, 
      text: "Which one should I buy?", 
      sender: 'user' as const, 
      delay: 4500 
    },
    { 
      id: 6, 
      text: "Based on your style history, I'd recommend Athena. You love premium fabrics & formal wear. Plus with 15% off, you save ₹1,501. Best choice for your collection!", 
      sender: 'bot' as const, 
      delay: 5500 
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-card/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Chat Demo (ALTERNATING) */}
          <ChatbotDemo 
            title="Compare Agent"
            description="Smart product comparison with AI recommendations"
            messages={compareMessages}
          />

          {/* Right: Content (ALTERNATING) */}
          <div>
            {/* Heading */}
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Compare Agent</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              Don't let analysis paralysis stop you. Our Compare Agent analyzes multiple products across price, quality, and customer feedback to recommend the best match for your style and budget.
            </p>

            {/* Pointers */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Multi-dimensional analysis</h4>
                  <p className="text-sm text-muted-foreground">Price, material, fit, reviews, and brand reputation analyzed instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">AI recommendation</h4>
                  <p className="text-sm text-muted-foreground">Personalized pick based on your style history and preferences</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Confidence scoring</h4>
                  <p className="text-sm text-muted-foreground">See exactly why the AI recommends one product over others</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Pros & cons synthesis</h4>
                  <p className="text-sm text-muted-foreground">Real customer feedback themes condensed into actionable insights</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Compare up to 5 products</h4>
                  <p className="text-sm text-muted-foreground">Analyze multiple options side-by-side instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCompareEnhanced;