import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🧭 Global components
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/components/Layout";

// 🏠 Core pages
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import Playground from "@/pages/Playground"; // ✨ ADD THIS LINE

// 🤖 Product pages - Customer Suite
import CustomerDiscovery from "@/pages/Discovery";
import CustomerAssistant from "@/pages/Assistant";

// 🏪 Product pages - Merchant Suite  
import MerchantMerchandising from "@/pages/Merchandising";
import MerchantAnalytics from "@/pages/Analytics";

// 🚀 Future products
import FutureVision from "@/pages/FutureVision";

// ⚖️ Legal pages
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import Security from "@/pages/Security";

import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* 🏠 Home */}
          <Route path="/" element={<Index />} />

          {/* 🎯 Solutions */}
          <Route path="/solutions" element={<Solutions />} />

          {/* 🛍️ Products overview page */}
          <Route path="/products" element={<Products />} />

          {/* ✨ Interactive Playground - ADD THIS LINE */}
          <Route path="/playground" element={<Playground />} />

          {/* 🤖 Customer Suite Products */}
          <Route path="/customer/discovery" element={<CustomerDiscovery />} />
          <Route path="/customer/assistant" element={<CustomerAssistant />} />

          {/* 🏪 Merchant Suite Products */}
          <Route path="/merchant/merchandising" element={<MerchantMerchandising />} />
          <Route path="/merchant/analytics" element={<MerchantAnalytics />} />

          {/* 🚀 Future Products */}
          <Route path="/products/future-vision" element={<FutureVision />} />

          {/* 💰 Other Pages */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />

          {/* ⚖️ Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/security" element={<Security />} />

          {/* 🚫 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;