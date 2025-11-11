import ChatbotDemo from '@/components/ChatbotDemo';

const ProductsDealsAgent = () => {
  const dealsMessages = [
    { 
      id: 1, 
      text: "I like the Athena dress but want to check for better deals", 
      sender: 'user' as const, 
      delay: 500 
    },
    { 
      id: 2, 
      text: "Perfect! Let me find similar dresses with even better prices for you.", 
      sender: 'bot' as const, 
      delay: 1500 
    },
    { 
      id: 3, 
      text: "Found 3 amazing alternatives with better discounts!\n\n💰 Varanga: ₹399 (Save ₹600!)\n💰 Mango: ₹599 (Save ₹400!)", 
      sender: 'bot' as const, 
      delay: 2500
    },
    { 
      id: 4, 
      text: "All have 4.2+ ratings and similar quality. Varanga gives you the best value with A-line comfort fit.", 
      sender: 'bot' as const, 
      delay: 3500 
    },
    { 
      id: 5, 
      text: "Which one looks better?", 
      sender: 'user' as const, 
      delay: 4500 
    },
    { 
      id: 6, 
      text: "Varanga! You save ₹600 vs Athena while getting 4.2★ rating. Plus the A-line fit is trending right now. Best deal of the three.", 
      sender: 'bot' as const, 
      delay: 5500 
    },
    { 
      id: 7, 
      text: "Ready to add to cart?", 
      sender: 'bot' as const, 
      delay: 6500 
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-card/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Chat Demo (ALTERNATING) */}
          <ChatbotDemo 
            title="Deals Agent"
            description="Better discounts on similar products"
            messages={dealsMessages}
          />

          {/* Right: Content (ALTERNATING) */}
          <div>
            {/* Heading */}
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Deals Agent</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              Found a product you love but want a better deal? Select it and ask. Our Deals Agent finds similar items with bigger discounts, flash sales, and upcoming offers—helping you save money without compromising on quality.
            </p>

            {/* Pointers */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Similar product search</h4>
                  <p className="text-sm text-muted-foreground">Finds alternatives with same quality but better prices</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Flash sale detection</h4>
                  <p className="text-sm text-muted-foreground">Real-time alerts for upcoming deals on your wishlist items</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Price comparison</h4>
                  <p className="text-sm text-muted-foreground">See historical pricing and predict when deals will drop</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Quality maintained</h4>
                  <p className="text-sm text-muted-foreground">Only shows deals on products with similar or better ratings</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Maximum savings</h4>
                  <p className="text-sm text-muted-foreground">Users save ₹1,200+ average when comparing alternatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDealsAgent;