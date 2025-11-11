import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Solutions(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#050608] text-white">

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-16 text-center">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Badge>Complete AI Commerce Suite</Badge>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.08]">
            The Journey to{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Intelligent Commerce
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70">
            Each product builds on the last.  
            Together, they create a smooth shopping experience for customers  
            and a store that runs itself for merchants.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 relative">

          {/* Glowing gradient line */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 
            bg-gradient-to-b from-teal-400/40 via-cyan-400/40 to-transparent blur-[1.5px]" />

          <Step
            reverse={false}
            title="Discover Pro"
            tagline="Your store assistant for every customer. Helps shoppers find exactly what they're looking for with smart recommendations, instant comparisons, and personalized guidance."
            bullets={[
              "Natural language search understands customer intent and budget",
              "Personalized product recommendations ranked by relevance",
              "Side-by-side comparison with key differences highlighted",
              "Deal finder shows similar products and active discounts",
            ]}
            animation={<DiscoverAnimation />}
            cta="/customer/discovery"
          />

          <Step
            reverse
            title="Support Concierge"
            tagline="24/7 intelligent customer support that handles order tracking, returns, FAQs, and issue resolution instantly. Human-quality service at machine speed."
            bullets={[
              "Real-time order tracking with proactive delivery alerts",
              "One-click return initiation with automatic label generation",
              "Instant FAQ responses with context-aware problem-solving",
              "Smart escalation to human agents when needed",
            ]}
            animation={<SupportAnimation />}
            cta="/customer/assistant"
          />

          <Step
            reverse={false}
            title="Merch Optimize"
            tagline="AI rewrites your product content for every festival and season—automatically. Same product, always relevant with event-driven optimization."
            bullets={[
              "Auto-optimizes descriptions and tags for festivals (Diwali, Eid, Christmas)",
              "Quality scores every product with SEO effectiveness analysis",
              "Collections auto-arrange by season with strategic promotion timing",
              "Bulk CSV optimization with preview and approval workflow",
            ]}
            animation={<MerchAnimation />}
            cta="/merchant/merchandising"
          />

          <Step
            reverse
            title="TrendSight"
            tagline="Your store's weekly heartbeat. Track trends, spot unmet demand, and anticipate what customers will want next with AI-powered predictive analytics."
            bullets={[
              "Weekly commerce pulse reports with top/underperformers",
              "Unmet demand detection shows what customers searched but couldn't find",
              "AI recommendations for inventory planning and bundling",
              "Predictive insights help you stock right products at right time",
            ]}
            animation={<TrendAnimation />}
            cta="/merchant/analytics"
          />

        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------
   COMPONENTS
------------------------------------------ */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-md border border-white/15 px-2 py-1">
      <span className="text-[11px] font-medium uppercase tracking-wide text-white/60">
        {children}
      </span>
    </div>
  );
}

type StepProps = {
  reverse?: boolean;
  title: string;
  tagline: string;
  bullets: string[];
  animation: React.ReactNode;
  cta: string;
};

function Step({ reverse = false, title, tagline, bullets, animation, cta }: StepProps) {
  return (
    <div className="relative mb-32 last:mb-0">
      <div className={`grid lg:grid-cols-2 gap-20 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        
        {/* Animation */}
        <div className={reverse ? "order-2" : "order-1"}>{animation}</div>

        {/* Text */}
        <div className={reverse ? "order-1 lg:pr-12" : "order-2 lg:pl-12"}>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-white/75 text-lg mb-6 leading-relaxed">{tagline}</p>

          <ul className="space-y-2 mb-8">
            {bullets.map((b, i) => (
              <li key={i} className="text-white/70 flex gap-2 text-sm leading-relaxed">
                <span className="text-teal-300">•</span> {b}
              </li>
            ))}
          </ul>

          <PrimaryLink to={cta}>Learn More</PrimaryLink>
        </div>
      </div>
    </div>
  );
}

function PrimaryLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-black
      bg-gradient-to-r from-teal-300 to-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.08)]
      transition-transform duration-200 hover:scale-[1.03]"
    >
      {children} →
    </Link>
  );
}

/* ------------------------------------------
   ANIMATIONS
------------------------------------------ */

// Discover Pro - Search → AI thinking → Product recommendations
function DiscoverAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-[#0D0F12] border border-white/10 rounded-xl space-y-4"
    >
      {/* Search bar with typing effect */}
      <div className="relative">
        <div className="h-12 rounded-lg bg-white/8 border border-white/10 flex items-center px-4">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            className="h-3 bg-gradient-to-r from-teal-300/40 to-transparent rounded"
          />
        </div>
        {/* Search icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal-400/20" />
      </div>

      {/* AI processing indicator */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, times: [0, 0.3, 1] }}
        className="flex items-center gap-2 px-4"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
        <span className="text-xs text-white/50">Understanding your needs...</span>
      </motion.div>

      {/* Product cards appearing */}
      <div className="grid grid-cols-3 gap-3">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 1,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="aspect-[3/4] rounded-lg bg-gradient-to-br from-white/12 to-white/5 border border-white/10 p-2"
          >
            <div className="w-full h-2/3 rounded bg-white/8 mb-2" />
            <div className="space-y-1">
              <div className="h-2 bg-white/10 rounded w-3/4" />
              <div className="h-2 bg-white/10 rounded w-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Support Concierge - Customer message → AI thinking → Response
function SupportAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4 p-8 bg-[#0D0F12] border border-white/10 rounded-xl"
    >
      {/* Customer message */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 4 }}
        className="flex gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
        <div className="flex-1">
          <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
            <div className="h-2 bg-white/20 rounded w-full mb-1.5" />
            <div className="h-2 bg-white/20 rounded w-3/4" />
          </div>
          <span className="text-[10px] text-white/30 ml-2 mt-1 block">Where is my order?</span>
        </div>
      </motion.div>

      {/* Typing indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ 
          duration: 3,
          times: [0, 0.2, 0.6, 1],
          repeat: Infinity,
          repeatDelay: 1.5
        }}
        className="flex gap-3 pl-3"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 flex-shrink-0" />
        <div className="bg-white/8 rounded-2xl rounded-tl-sm p-3 px-4">
          <div className="flex gap-1.5">
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 1.2, delay, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-white/60"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI response */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 2, repeat: Infinity, repeatDelay: 2.5 }}
        className="flex gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 flex-shrink-0" />
        <div className="flex-1">
          <div className="bg-gradient-to-br from-teal-400/15 to-cyan-400/10 border border-teal-400/20 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
            <div className="h-2 bg-white/25 rounded w-full mb-1.5" />
            <div className="h-2 bg-white/25 rounded w-full mb-1.5" />
            <div className="h-2 bg-white/25 rounded w-2/3" />
          </div>
          <span className="text-[10px] text-white/30 ml-2 mt-1 block">Order #1234 arriving Tuesday</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Merch Optimize - Product catalog → AI audit → Content enhancement
function MerchAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-[#0D0F12] border border-white/10 rounded-xl space-y-6"
    >
      {/* Event selector */}
      <div className="flex gap-2">
        {['Diwali', 'Black Friday', 'Christmas'].map((event, i) => (
          <motion.div
            key={event}
            animate={{ 
              borderColor: i === 0 ? ['rgba(255,255,255,0.1)', 'rgba(94,234,212,0.5)', 'rgba(255,255,255,0.1)'] : 'rgba(255,255,255,0.1)',
              backgroundColor: i === 0 ? ['rgba(255,255,255,0.05)', 'rgba(94,234,212,0.1)', 'rgba(255,255,255,0.05)'] : 'rgba(255,255,255,0.05)'
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            className="px-3 py-1.5 rounded-md border text-xs text-white/60"
          >
            {event}
          </motion.div>
        ))}
      </div>

      {/* Product cards being optimized */}
      <div className="grid grid-cols-3 gap-3">
        {[0, 0.3, 0.6, 0.9, 1.2, 1.5].map((delay, i) => (
          <motion.div
            key={i}
            className="relative aspect-[3/4] rounded-lg border border-white/10 overflow-hidden"
          >
            {/* Before state - incomplete */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, delay: delay + 1, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent p-2"
            >
              <div className="w-full h-2/3 rounded bg-white/5 mb-2" />
              <div className="space-y-1">
                <div className="h-1.5 bg-white/8 rounded w-1/3" />
                <div className="h-1.5 bg-red-400/20 rounded w-1/4" />
              </div>
              {/* Warning indicator */}
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-red-400/30 border border-red-400/50" />
            </motion.div>

            {/* After state - optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: delay + 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/5 p-2"
            >
              <div className="w-full h-2/3 rounded bg-gradient-to-br from-white/12 to-white/8 mb-2" />
              <div className="space-y-1">
                <div className="h-1.5 bg-white/15 rounded w-3/4" />
                <div className="h-1.5 bg-white/15 rounded w-full" />
                <div className="h-1.5 bg-white/15 rounded w-1/2" />
              </div>
              {/* Success indicator */}
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-teal-400/30 border border-teal-400/50 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: delay + 1.7 }}
                  className="w-2 h-2 rounded-full bg-teal-400"
                />
              </div>
            </motion.div>

            {/* AI sparkle effect */}
            <motion.div
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 1, delay: delay + 1.2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent pointer-events-none"
            />
          </motion.div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex items-center gap-2 text-xs text-white/50">
        <div className="relative w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 2.5 }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400/50 to-cyan-400/50 rounded-full"
          />
        </div>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 4.5 }}
        >
          Optimizing catalog...
        </motion.span>
      </div>
    </motion.div>
  );
}

// Trend Sight - Live data flowing → Analytics dashboard
function TrendAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-[#0D0F12] border border-white/10 rounded-xl space-y-6"
    >
      {/* Top metrics cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Revenue', value: '$24.5K', change: '+12%' },
          { label: 'Orders', value: '847', change: '+8%' },
          { label: 'Conversion', value: '3.2%', change: '+0.4%' }
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/5 rounded-lg p-3 border border-white/10"
          >
            <div className="text-[10px] text-white/40 mb-1">{metric.label}</div>
            <div className="flex items-end justify-between">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="text-lg font-semibold text-white/90"
              >
                {metric.value}
              </motion.div>
              <div className="text-[10px] text-teal-400">{metric.change}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live chart */}
      <div className="relative h-32 bg-white/5 rounded-lg border border-white/10 p-4">
        {/* Y-axis labels */}
        <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-[9px] text-white/30">
          <span>High</span>
          <span>Med</span>
          <span>Low</span>
        </div>

        {/* Chart bars */}
        <div className="h-full flex items-end gap-1.5 pl-10">
          {[40, 65, 45, 80, 60, 90, 70, 95, 85, 75, 88, 92].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="flex-1 rounded-t"
              style={{
                background: i >= 8 
                  ? 'linear-gradient(to top, rgba(94, 234, 212, 0.4), rgba(34, 211, 238, 0.3))'
                  : 'linear-gradient(to top, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))'
              }}
            />
          ))}
        </div>

        {/* Prediction indicator */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="absolute right-4 top-4 flex items-center gap-1.5 text-[10px] text-cyan-400"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Prediction
        </motion.div>
      </div>

      {/* Insight alerts */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, repeat: Infinity, repeatDelay: 3 }}
        className="flex items-start gap-2 p-3 bg-gradient-to-r from-teal-400/10 to-transparent rounded-lg border border-teal-400/20"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-teal-400 mt-1 flex-shrink-0"
        />
        <div>
          <div className="text-xs text-white/80 mb-0.5">Insight Detected</div>
          <div className="text-[10px] text-white/50">Winter jackets trending up 23% this week</div>
        </div>
      </motion.div>
    </motion.div>
  );
}