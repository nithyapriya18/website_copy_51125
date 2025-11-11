import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    demoType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you! We will be in touch soon.');
    setFormData({ name: '', email: '', company: '', message: '', demoType: 'general' });
  };

  return (
    <div className="bg-background">
      <Navbar />
      <main className="pt-32">
        {/* Contact Section */}
        <section className="relative py-24 px-4 md:px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--peacock-blue))] via-[hsl(var(--peacock-cyan))] to-[hsl(var(--peacock-green))] opacity-20 blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Request a <span className="text-gradient">Demo</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Let's show you how Opura AI can transform your online shopping experience
              </p>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-card/60 border border-primary/20 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Demo Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What would you like to see?
                  </label>
                  <select
                    name="demoType"
                    value={formData.demoType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="general">General Overview</option>
                    <option value="shopping">AI Shopping Assistant</option>
                    <option value="support">Support Concierge</option>
                    <option value="discovery">Intelligent Discovery</option>
                    <option value="all">All Features</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-peacock hover:opacity-90 transition-all py-6 text-base font-medium"
                >
                  Request Demo
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;