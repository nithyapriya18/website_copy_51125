import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-400">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your <span className="text-gradient">Growth Path</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Start with customer-facing features, scale to full commerce intelligence. Every plan includes everything from the previous tier.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Basic Plan */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <p className="text-gray-400">Perfect for getting started</p>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-semibold text-teal-400 mb-4">CUSTOMER SUITE</div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Discover Pro - AI shopping assistant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Support Concierge - 24/7 customer support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Product recommendations & comparisons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Automated order tracking & returns</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8 pt-6 border-t border-gray-700">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Usage Based On:</div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Number of conversations</li>
                    <li>• Active products in catalog</li>
                    <li>• Monthly active users</li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/#contact-form"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Advanced Plan - Highlighted */}
              <div className="bg-gradient-to-b from-teal-900/30 to-gray-800/50 border-2 border-teal-500/50 rounded-2xl p-8 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-black text-sm font-semibold rounded-full">
                  Most Popular
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Advanced</h3>
                  <p className="text-gray-400">For growing businesses</p>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-semibold text-teal-400 mb-4">EVERYTHING IN BASIC, PLUS:</div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Merch Optimize - Auto content optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">TrendSight - Predictive analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Event-driven content for festivals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Weekly commerce pulse reports</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8 pt-6 border-t border-teal-700/50">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Additional Usage Based On:</div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Number of optimized products</li>
                    <li>• Analytics depth & frequency</li>
                    <li>• Custom event calendars</li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/#contact-form"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-gray-400">For large-scale operations</p>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-semibold text-teal-400 mb-4">EVERYTHING IN ADVANCED, PLUS:</div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom integrations & workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Priority support & SLA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Advanced security & compliance</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8 pt-6 border-t border-gray-700">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Flexible Pricing:</div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Volume discounts available</li>
                    <li>• Custom agent seats</li>
                    <li>• White-label options</li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/#contact-form"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
                  >
                    <span>Contact Sales</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Pricing FAQ
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How is pricing determined?</h3>
                <p className="text-gray-600">
                  Pricing is customized based on your specific needs, including the number of conversations, products in your catalog, and desired features. Contact us for a personalized quote.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade or downgrade plans?</h3>
                <p className="text-gray-600">
                  Yes! You can upgrade to access more features at any time. Each tier includes everything from the previous tier, making transitions seamless.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What counts as a conversation?</h3>
                <p className="text-gray-600">
                  A conversation is counted when a customer interacts with either Discover Pro or Support Concierge. Multiple messages within a session count as one conversation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">
                  We offer a demo and proof-of-concept period to ensure our platform fits your needs. Contact us to schedule a personalized demo.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What about enterprise volume discounts?</h3>
                <p className="text-gray-600">
                  Enterprise customers with high volumes can access special pricing. Our team will work with you to create a custom package that scales with your business.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What integrations are supported?</h3>
                <p className="text-gray-600">
                  We integrate with major e-commerce platforms including Shopify, WooCommerce, and Magento. Enterprise customers can request custom integrations.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss which plan is right for your business.
            </p>
            <Link 
              to="/#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>Contact Us for Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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
      `}} />
    </div>
  );
};

export default Pricing;