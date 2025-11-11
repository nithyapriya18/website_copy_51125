import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/pages/Products";

const Customer = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Products />
      </main>
    </div>
  );
};

export default Customer;
