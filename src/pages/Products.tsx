import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Customer suite sections
import ProductsHero from "@/components/sections/products/ProductsHero";
import ProductsList from "@/components/sections/products/ProductsList";
import ProductsSupport from "@/components/sections/products/ProductsSupport";
import ProductsComingSoon from "@/components/sections/products/ProductsComingSoon";

const Products = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <ProductsHero />
        <ProductsList />
        <ProductsSupport />
        <ProductsComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
