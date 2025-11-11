import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-background py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-400">
              Last Updated: November 2, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              By accessing or using Opura AI's services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services. These Terms apply to all users, including visitors, customers, and others who access the service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Description of Services</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Opura AI provides AI-powered solutions for e-commerce businesses, including but not limited to intelligent product discovery, personalized recommendations, conversational shopping assistants, and automated merchandising tools. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Account Registration</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To use certain features of our services, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              You may not use another person's account without permission. We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>Use our services for any illegal purpose or in violation of any laws</li>
              <li>Interfere with or disrupt the services or servers</li>
              <li>Attempt to gain unauthorized access to any part of the services</li>
              <li>Use automated systems (bots, scrapers) to access the services without permission</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Collect or harvest information about other users</li>
              <li>Impersonate any person or entity</li>
              <li>Use the services to compete with Opura AI</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">5.1 Our Intellectual Property</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              All content, features, and functionality of our services, including but not limited to software, text, graphics, logos, and AI models, are owned by Opura AI and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">5.2 Your Content</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              You retain ownership of any content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your content solely for the purpose of providing and improving our services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Subscription and Payments</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.1 Pricing</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Subscription fees are as stated on our pricing page. We reserve the right to change our pricing with 30 days' notice to existing customers.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.2 Billing</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Subscriptions are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for all fees. If payment fails, we may suspend or terminate your access to the services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.3 Refunds</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Refunds are handled on a case-by-case basis. Please contact our support team at <a href="mailto:support@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">support@opura.ai</a> for refund requests.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">6.4 Cancellation</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. You will not receive a refund for the remaining period.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Data and Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your use of our services is also governed by our <Link to="/privacy" className="text-[hsl(var(--peacock-cyan))] hover:underline">Privacy Policy</Link>. We process data in accordance with applicable data protection laws and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Service Level and Support</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              While we strive to provide reliable services, we do not guarantee uninterrupted or error-free operation. Support is provided as outlined in your subscription plan. Response times may vary based on issue severity and your plan tier.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our services may integrate with third-party platforms and services. We are not responsible for the availability, accuracy, or content of third-party services. Your use of third-party services is subject to their own terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">10.1 Disclaimers</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">10.2 Limitation of Liability</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPURA AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR GOODWILL.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              You agree to indemnify and hold harmless Opura AI and its officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of the services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">12. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We may terminate or suspend your access to the services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the services will immediately cease. Sections of these Terms that by their nature should survive termination will survive.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Opura AI is registered, without regard to its conflict of law provisions. Any disputes arising from these Terms or the services shall be resolved through binding arbitration, except where prohibited by law.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">15. General Provisions</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Opura AI</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in effect</li>
              <li><strong>Waiver:</strong> Failure to enforce any right or provision does not constitute a waiver</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent; we may assign them without restriction</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">16. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Email:</strong> <a href="mailto:legal@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">legal@opura.ai</a>
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Support:</strong> <a href="mailto:support@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">support@opura.ai</a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Website:</strong> <a href="https://opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">opura.ai</a>
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8 mt-12">
              <p className="text-center text-gray-400">
                <Link to="/" className="text-[hsl(var(--peacock-cyan))] hover:underline">Return to Home</Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;