import ChatbotDemo from '@/components/ChatbotDemo';

const ProductsImageBasedEnhanced = () => {
  const imageSearchMessages = [
    { 
      id: 1, 
      text: "I found this dress online and love the style. Can you find similar ones?", 
      sender: 'user' as const, 
      delay: 500
    },
    { 
      id: 2, 
      text: "Great choice! Let me search our catalog for similar items...", 
      sender: 'bot' as const, 
      delay: 1500 
    },
    { 
      id: 3, 
      text: "Found 12 dresses with similar style, color, and silhouette!", 
      sender: 'bot' as const, 
      delay: 2500
    },
    { 
      id: 4, 
      text: "Here are some great matches for you to explore.", 
      sender: 'bot' as const, 
      delay: 3500 
    },
    { 
      id: 5, 
      text: "Can I also get styling suggestions?", 
      sender: 'user' as const, 
      delay: 4500 
    },
    { 
      id: 6, 
      text: "Perfect! I found 8 items that pair beautifully with this style - heels, bags, jewelry, and more.", 
      sender: 'bot' as const, 
      delay: 5500 
    },
    { 
      id: 7, 
      text: "Want me to help you put together a complete look?", 
      sender: 'bot' as const, 
      delay: 6500 
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
              <span className="text-gradient">Image-Based Discovery</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              Found something you love? Upload the image and our AI will find exact matches from our catalog plus complementary items that complete your look perfectly.
            </p>

            {/* Pointers */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Visual similarity matching</h4>
                  <p className="text-sm text-muted-foreground">Advanced recognition finds products matching style, color, and silhouette</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Complementary suggestions</h4>
                  <p className="text-sm text-muted-foreground">Get accessory and styling suggestions that pair perfectly</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">One-click search</h4>
                  <p className="text-sm text-muted-foreground">Upload image or paste URL - get results in seconds</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Complete styling</h4>
                  <p className="text-sm text-muted-foreground">Build entire outfits from a single inspiration image</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-base">Works with any image</h4>
                  <p className="text-sm text-muted-foreground">Social media, screenshots, real photos - search any style</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Chat Demo */}
          <ChatbotDemo 
            title="Image-Based Discovery"
            description="Visual search in action"
            messages={imageSearchMessages}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsImageBasedEnhanced;