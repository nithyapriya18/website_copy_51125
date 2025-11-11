import { useState } from 'react';
import {
  Search,
  MessageSquare,
  Image as ImageIcon,
  Scale,
  TrendingUp,
  Wand2,
  Gift,
  Moon,
  Calendar,
  Sparkles,
  Zap,
  Star,
  ArrowRight,
  Lock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductsAgentShowcase = () => {
  const [activeAgent, setActiveAgent] = useState('recommendation');

  const agents = [
    {
      id: 'recommendation',
      icon: Search,
      name: 'Recommendation Agent',
      status: 'live',
      description: 'Natural language to personalized products. Tell our AI what you need, and it understands context, budget, and style.',
      benefits: [
        'Understands conversational context',
        'Budget-aware filtering',
        'Style preference learning',
        'Multi-attribute search'
      ],
      color: 'from-blue-500 to-cyan-500',
      demo: 'See it in action above'
    },
    {
      id: 'support',
      icon: MessageSquare,
      name: 'Support Concierge',
      status: 'live',
      description: '24/7 intelligent support that resolves issues, tracks orders, and delights customers with instant solutions.',
      benefits: [
        'Instant issue resolution',
        'Real-time order tracking',
        'Proactive compensation',
        'Context-aware assistance'
      ],
      color: 'from-emerald-500 to-teal-500',
      demo: 'Handles 70%+ of issues without escalation'
    },
    {
      id: 'image',
      icon: ImageIcon,
      name: 'Image-Based Discovery',
      status: 'live',
      description: 'Upload any product image. Find exact matches, similar styles, and complementary items instantly.',
      benefits: [
        'Visual similarity matching',
        'Complementary product discovery',
        'Trend-aware recommendations',
        'Style profile building'
      ],
      color: 'from-pink-500 to-rose-500',
      demo: 'Upload and discover instantly'
    },
    {
      id: 'compare',
      icon: Scale,
      name: 'Compare Agent',
      status: 'live',
      description: 'More than specs. Compare products with AI insights on value, quality, customer sentiment, and personal fit.',
      benefits: [
        'Multi-dimensional comparison',
        'Review sentiment analysis',
        'Value-for-money scoring',
        'Personalized recommendations'
      ],
      color: 'from-purple-500 to-indigo-500',
      demo: 'See comparison preview below'
    },
    {
      id: 'trend',
      icon: TrendingUp,
      name: 'Trend Radar',
      status: 'coming',
      description: 'Stay ahead of the curve. Discover what\'s becoming popular before it goes mainstream.',
      benefits: [
        'Predictive trend detection',
        'Micro-trend identification',
        'Early access to trending items',
        'FOMO-free discovery'
      ],
      color: 'from-orange-500 to-amber-500',
      demo: 'Launching in Q1 2026'
    },
    {
      id: 'celebrity',
      icon: Wand2,
      name: 'Celebrity Mode',
      status: 'coming',
      description: 'Wear what your favorite celebrities wear. Real-time updates on celebrity fashion with one-click shopping.',
      benefits: [
        'Real-time celebrity outfit tracking',
        'Multi-product outfit bundles',
        'Celebrity style matching',
        'Red carpet to retail'
      ],
      color: 'from-pink-500 to-red-500',
      demo: 'Launching in Q1 2026'
    },
    {
      id: 'gift',
      icon: Gift,
      name: 'Gift Suggester',
      status: 'coming',
      description: 'Find the perfect gift instantly. Answer a few questions and get personalized gift recommendations.',
      benefits: [
        'Occasion-specific curation',
        'Relationship-aware suggestions',
        'Budget optimization',
        'Gift-wrapping coordination'
      ],
      color: 'from-rose-500 to-pink-500',
      demo: 'Launching for holiday 2025'
    },
    {
      id: 'green',
      icon: Moon,
      name: 'Green Mode',
      status: 'coming',
      description: 'Shop sustainably without compromise. Curated eco-friendly options that don\'t sacrifice style or quality.',
      benefits: [
        'Sustainability filtering',
        'Carbon footprint tracking',
        'Supply chain transparency',
        'Impact quantification'
      ],
      color: 'from-green-500 to-emerald-500',
      demo: 'Launching Q2 2026'
    },
    {
      id: 'occasion',
      icon: Calendar,
      name: 'Occasion Shopping',
      status: 'coming',
      description: 'Perfect your look for any event. Complete outfit curation for weddings, parties, dates, and more.',
      benefits: [
        'Event-specific curation',
        'Complete look building',
        'Timing intelligence',
        'Budget-friendly options'
      ],
      color: 'from-blue-500 to-indigo-500',
      demo: 'Launching Q1 2026'
    }
  ];

  const activeAgentData = agents.find(a => a.id === activeAgent);
  const IconComponent = activeAgentData?.icon || Search;
  const isLive = activeAgentData?.status === 'live';

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Meet Your <span className="text-gradient">AI Shopping Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each agent is designed to handle a specific part of your shopping journey. Choose an agent to explore.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {agents.map((agent) => {
            const AgentIcon = agent.icon;
            const isActive = agent.id === activeAgent;
            const isComingSoon = agent.status === 'coming';

            return (
              <button
                key={agent.id}
                onClick={() => !isComingSoon && setActiveAgent(agent.id)}
                className={`relative p-4 rounded-lg border-2 transition-all group ${
                  isActive
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/50'
                } ${isComingSoon ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                disabled={isComingSoon}
              >
                <div className="flex flex-col items-center gap-2">
                  <AgentIcon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
                  <span className="text-xs font-medium text-center line-clamp-2">{agent.name}</span>
                </div>

                {isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}

                {isLive && agent.id === activeAgent && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 h-6" variant="default">
                    Live
                  </Badge>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Agent Details */}
        {activeAgentData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Details */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${activeAgentData.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{activeAgentData.name}</h3>
                      <Badge className="mt-2" variant={isLive ? 'default' : 'secondary'}>
                        {isLive ? '✓ Live' : '🔒 Coming Soon'}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground">{activeAgentData.description}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeAgentData.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-primary font-bold">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {isLive ? (
                  <Button size="lg" className="w-full md:w-auto">
                    Try {activeAgentData.name} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button size="lg" className="w-full md:w-auto" variant="outline">
                    Join Waitlist for {activeAgentData.name}
                  </Button>
                )}
              </div>
            </div>

            {/* Right: Preview/Demo */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="rounded-lg border-2 border-border bg-gradient-to-br from-background to-card p-6 space-y-4">
                  <h4 className="font-bold">Agent Preview</h4>

                  {/* Status Card */}
                  <div className={`rounded-lg p-4 bg-gradient-to-br ${activeAgentData.color} bg-opacity-10 border border-current border-opacity-20`}>
                    <p className="text-sm font-medium">{activeAgentData.demo}</p>
                  </div>

                  {/* Quick Stats */}
                  {isLive && (
                    <>
                      <div className="border-t border-border pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Availability</span>
                          <span className="font-semibold">24/7</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Response Time</span>
                          <span className="font-semibold">Instant</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Accuracy</span>
                          <span className="font-semibold">98%+</span>
                        </div>
                      </div>

                      <div className="border-t border-border pt-4 flex gap-2">
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">
                          Continuously learning and improving from your feedback
                        </p>
                      </div>
                    </>
                  )}

                  {!isLive && (
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground text-center py-2">
                        This agent is in development. Early access coming soon.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsAgentShowcase;