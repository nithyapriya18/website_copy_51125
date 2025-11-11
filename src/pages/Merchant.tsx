import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MerchantDashboard from "@/components/sections/merchant/MerchantDashboard";
import MerchantContentOptimizer from "@/components/sections/merchant/MerchantContentOptimizer";
import MerchantComingSoon from "@/components/sections/merchant/MerchantComingSoon";

const Merchant = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
                Merch Optimize{" "}
                <span className="bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] bg-clip-text text-transparent">
                  Suite
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto">
                From real-time analytics to AI-powered content generation — equip your team to act faster and smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Product */}
        <MerchantDashboard />

        {/* Content Optimizer Product */}
        <MerchantContentOptimizer />

        {/* Coming Soon Section */}
        <MerchantComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Merchant;