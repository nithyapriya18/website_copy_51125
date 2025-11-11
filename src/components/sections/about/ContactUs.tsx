import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white py-20 px-4 md:px-6">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Heading & Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-black">
                Ready to Transform
                <br />
                <span className="text-gradient">Your Store?</span>
              </h2>
              <p className="text-xl text-black/70 mb-12 leading-relaxed">
                Let's discuss how Opura can help you sell more and delight your customers
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex gap-4 items-start group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm mb-1">Email</p>
                    <a 
                      href="mailto:contactus@opura.ai" 
                      className="text-lg text-black/70 hover:text-primary transition-colors"
                    >
                      contactus@opura.ai
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm mb-1">Location</p>
                    <p className="text-lg text-black/70">Pune, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm mb-1">Response Time</p>
                    <p className="text-lg text-black/70">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Demo Request Form */}
            <div className="bg-gray-50 border-2 border-primary/20 rounded-2xl p-8 md:p-10 h-fit">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2 text-black">Get Started</h3>
                <p className="text-black/60">Fill out the form and we'll be in touch</p>
              </div>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Company *</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    required
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Work Email *</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Message (Optional)</label>
                  <textarea
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-black font-semibold py-4 text-lg mt-6 rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />
    </section>
  );
};

export default ContactUs;