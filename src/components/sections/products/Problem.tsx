import { TrendingDown, ShoppingCart, Search, ChartBar } from "lucide-react";

const Problem = () => {
const problems = [
  {
    icon: TrendingDown,
    stat: "2.86%",
    title: "Low Conversions",
    description: "Most visitors browse but don’t end up buying. Online guidance is harder than in-store."
  },
  {
    icon: ShoppingCart,
    stat: "70%",
    title: "High Cart Drop-Off",
    description: "Customers often leave before checkout — and potential sales disappear."
  },
  {
    icon: Search,
    stat: "75%",
    title: "Products Go Undiscovered",
    description: "Even when you have the right items, customers struggle to find what they want."
  },
  {
    icon: ChartBar,
    stat: "87%",
    title: "Data Not Used Well",
    description: "Your store collects data every day, but turning it into action still takes too much time."
  },
];




  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6 bg-gray-50">
      <div className="w-full max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            The Problem Is Clear
          </h2>
          <p className="text-xl md:text-2xl text-black/70">
            Shoppers expect ease. Merchants expect clarity. AI helps deliver both.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-12 hover:border-primary/40 transition-all hover:shadow-lg h-[420px] flex flex-col">
                <div className="flex flex-col items-center text-center gap-5 flex-grow justify-start">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-6xl font-bold text-primary leading-none">{problem.stat}</div>
                  <h3 className="text-xl font-semibold text-black mt-2">{problem.title}</h3>
                  <p className="text-base text-black/60 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-center text-black/40">
  *Industry data and research
</p>
      </div>
    </section>
  );
};

export default Problem;