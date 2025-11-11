import ChatbotDemo from '@/components/ChatbotDemo';

const ProductsDeepReviewsInsights = () => {
  const reviewMessages = [
    { 
      id: 1, 
      text: "What do customers say about this dress?", 
      sender: 'user' as const, 
      delay: 500 
    },
    { 
      id: 2, 
      text: "Let me analyze 248 verified reviews across multiple dimensions...", 
      sender: 'bot' as const, 
      delay: 1500 
    },
    { 
      id: 3, 
      text: "✅ What customers love:\n• Comfortable & breathable fabric (82%)\n• Elegant, timeless design (76%)\n• True to size fit (65%)", 
      sender: 'bot' as const, 
      delay: 2500 
    },
    { 
      id: 4, 
      text: "⚠️ Things to note:\n• Wrinkles easily - needs ironing (32%)\n• Slightly sheer - wear with slip (28%)\n• Color varies in bright light (18%)", 
      sender: 'bot' as const, 
      delay: 4000 
    },
    { 
      id: 5, 
      text: "How does it compare to similar dresses?", 
      sender: 'user' as const, 
      delay: 5500 
    },
    { 
      id: 6, 
      text: "This ranks above average: 4.4/5 vs 4.2 category avg. Better fit accuracy than peers. Trending style with A-line silhouettes.", 
      sender: 'bot' as const, 
      delay: 6500 
    },
    { 
      id: 7, 
      text: "Should I buy it?", 
      sender: 'user' as const, 
      delay: 8000 
    },
    { 
      id: 8, 
      text: "Yes! 75% positive reviews with 85% repeat buyers. Perfect for formal wear. Just remember: iron before wearing & pair with slip.", 
      sender: 'bot' as const, 
      delay: 9000 
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Heading */}
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Deep Reviews Insights</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              Go beyond star ratings. Get AI-synthesized insights into what real customers love and what to watch out for. Understand product quality through verified buyer experiences.
            </p>

            {/* Pointers */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Verified customer insights</h4>
                  <p className="text-sm text-muted-foreground">Real feedback from hundreds of verified buyers analyzed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Honest pros & cons</h4>
                  <p className="text-sm text-muted-foreground">What customers love and what to watch out for based on themes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Category comparison</h4>
                  <p className="text-sm text-muted-foreground">How this product ranks against similar items in the category</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Brand reputation</h4>
                  <p className="text-sm text-muted-foreground">Repeat purchase rates and customer loyalty signals analyzed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Smart recommendations</h4>
                  <p className="text-sm text-muted-foreground">AI learns from reviews to guide your purchase decision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Chat Demo (ALTERNATING) */}
          <ChatbotDemo 
            title="Deep Reviews Insights"
            description="AI-synthesized review analysis"
            messages={reviewMessages}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsDeepReviewsInsights;