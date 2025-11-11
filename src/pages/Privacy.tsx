import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-background py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-400">
              Last Updated: November 2, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Privacy Policy ("Policy") describes how Opura AI ("Opura," "we," "us," or "our") collects, uses, discloses, and protects information when you use our website (opura.ai), products, services, and applications (collectively, the "Services").
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with this Policy, please do not use our Services.
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mt-4">
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Company:</strong> Opura AI
                </p>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Email:</strong> <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Location:</strong> Bengaluru, India
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">2. Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">2.1 Information You Provide to Us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Account Information:</strong> Name, email address, company name, phone number (if provided), business information, billing and payment information.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Communications:</strong> Information you provide when you contact us (support requests, feedback, demo requests), information submitted through forms on our website, and email correspondence.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Customer Data:</strong> When you use our Services, you may provide product catalog data, customer interaction data, shopping behavior data, transaction data, and custom configurations and preferences.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">2.2 Information We Collect Automatically</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Usage Information:</strong> Pages visited and features used, time spent on pages, click-through rates, search queries, browser type and version, operating system, device information, IP address, and referring/exit pages.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Cookies and Tracking Technologies:</strong> Session cookies, persistent cookies, web beacons, pixel tags, local storage, and analytics identifiers.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Technical Data:</strong> Log files, server logs, API usage data, error reports, and performance metrics.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">2.3 Information from Third Parties</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Integration Partners:</strong> We may receive information from third-party platforms you integrate with our Services (e.g., e-commerce platforms, payment processors, analytics providers).
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Business Partners & Publicly Available Sources:</strong> Information from companies we work with, public databases, marketing partners, and social media platforms.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">3. How We Use Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Service Provision</h4>
                  <p className="text-gray-300">Provide, maintain, and improve our Services; process transactions; deliver AI-powered recommendations; customize user experience; and provide customer support.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Communication</h4>
                  <p className="text-gray-300">Send service-related announcements, respond to inquiries, send marketing communications (with your consent), provide product updates and newsletters.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Analytics and Improvement</h4>
                  <p className="text-gray-300">Analyze usage patterns and trends, conduct research and development, improve AI models and algorithms, test new features, and debug technical issues.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Security and Fraud Prevention</h4>
                  <p className="text-gray-300">Monitor and prevent fraudulent activity, detect and prevent security incidents, verify identity, enforce our Terms of Service.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Legal Compliance</h4>
                  <p className="text-gray-300">Comply with legal obligations, respond to legal requests, protect our rights and property, and resolve disputes.</p>
                </div>
              </div>
            </div>

            {/* Legal Basis for Processing (GDPR) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For users in the European Economic Area (EEA), UK, and Switzerland, we process personal data based on:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li><strong className="text-white">Consent:</strong> Where you have given explicit consent for specific purposes.</li>
                <li><strong className="text-white">Contract Performance:</strong> Processing necessary to provide Services you've requested.</li>
                <li><strong className="text-white">Legitimate Interests:</strong> Our legitimate business interests, including improving our Services, marketing and business development, security and fraud prevention.</li>
                <li><strong className="text-white">Legal Obligation:</strong> Compliance with applicable laws and regulations.</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">5. Data Sharing and Disclosure</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">We Share Information With:</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li><strong className="text-white">Service Providers:</strong> Cloud hosting providers (e.g., AWS, Google Cloud), payment processors, analytics providers, email service providers, customer support tools, and security service providers.</li>
                <li><strong className="text-white">Business Partners:</strong> E-commerce platform providers, integration partners, and marketing partners (with your consent).</li>
                <li><strong className="text-white">Corporate Transactions:</strong> In connection with mergers, acquisitions, bankruptcies, or sale of assets.</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, court orders, government requests, or to protect our rights.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">We Do NOT:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Sell your personal information to third parties</li>
                <li>• Share your data with advertisers without consent</li>
                <li>• Use your customer data for purposes other than providing Services</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <p className="text-gray-300 mb-2"><strong className="text-white">Account information:</strong> Duration of account + 7 years (for legal compliance)</p>
                <p className="text-gray-300 mb-2"><strong className="text-white">Transaction records:</strong> 7 years (financial regulations)</p>
                <p className="text-gray-300 mb-2"><strong className="text-white">Usage logs:</strong> 2 years</p>
                <p className="text-gray-300 mb-2"><strong className="text-white">Marketing data:</strong> Until consent withdrawal or 3 years of inactivity</p>
                <p className="text-gray-300"><strong className="text-white">Customer support tickets:</strong> 5 years</p>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">7. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technical Measures</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Encryption in transit (TLS/SSL)</li>
                    <li>• Encryption at rest</li>
                    <li>• Secure data centers</li>
                    <li>• Regular security audits</li>
                    <li>• Intrusion detection systems</li>
                    <li>• Firewalls and access controls</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Organizational Measures</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Employee training on data protection</li>
                    <li>• Confidentiality agreements</li>
                    <li>• Access controls and authorization</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular security assessments</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 italic">
                Note: No method of transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">8. Your Rights and Choices</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">General Rights</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong className="text-white">Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong className="text-white">Objection:</strong> Object to processing of your personal information</li>
                <li><strong className="text-white">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">Marketing Communications</h3>
              <p className="text-gray-300 leading-relaxed mb-4">You may opt out of marketing emails by:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Clicking "unsubscribe" in emails</li>
                <li>• Contacting us at <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a></li>
                <li>• Updating your account preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">Exercising Your Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                To exercise any of these rights, contact us at <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>. We will respond within 30 days (GDPR) or 45 days (CCPA), or as required by applicable law.
              </p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are based in India and may transfer data to countries outside your jurisdiction. When we transfer data internationally, we ensure appropriate safeguards, including:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Standard Contractual Clauses (SCCs)</li>
                <li>• Adequacy decisions</li>
                <li>• Binding Corporate Rules</li>
                <li>• Your explicit consent</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Services are not directed to individuals under 18 (or applicable age of majority). We do not knowingly collect information from children. If we learn we have collected information from a child, we will delete it promptly. If you believe we have collected information from a child, contact us immediately.
              </p>
            </div>

            {/* California Privacy Rights (CCPA/CPRA) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">11. California Privacy Rights (CCPA/CPRA)</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">California Consumer Rights</h3>
              <p className="text-gray-300 leading-relaxed mb-4">If you are a California resident, you have the right to:</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li><strong className="text-white">Know:</strong> What personal information we collect, use, disclose, and sell</li>
                <li><strong className="text-white">Access:</strong> Request a copy of your personal information</li>
                <li><strong className="text-white">Delete:</strong> Request deletion of your personal information</li>
                <li><strong className="text-white">Opt-Out:</strong> Opt out of the sale or sharing of personal information (we do not sell data)</li>
                <li><strong className="text-white">Correct:</strong> Request correction of inaccurate personal information</li>
                <li><strong className="text-white">Limit:</strong> Limit use of sensitive personal information</li>
                <li><strong className="text-white">Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">Categories of Information Collected</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Identifiers (name, email, IP address)</li>
                <li>• Commercial information (transaction history)</li>
                <li>• Internet activity (browsing behavior)</li>
                <li>• Professional information (company name, role)</li>
                <li>• Inferences (preferences, characteristics)</li>
              </ul>
            </div>

            {/* European Privacy Rights (GDPR) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">12. European Privacy Rights (GDPR)</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Data Controller:</strong> Opura AI is the data controller for personal information collected through our Services.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Your GDPR Rights</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Right to access</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure ("right to be forgotten")</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object</li>
                <li>• Rights related to automated decision-making and profiling</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Data Protection Officer:</strong> For data protection inquiries, contact <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>
              </p>

              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>

            {/* Other Jurisdictions */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">13. Other Jurisdictions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We comply with applicable privacy laws in all jurisdictions where we operate, including:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• India's Information Technology Act, 2000 and Rules</li>
                <li>• Digital Personal Data Protection Act (DPDP), 2023 (India)</li>
                <li>• Other applicable regional and local privacy laws</li>
              </ul>
            </div>

            {/* Cookies Policy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">14. Cookies Policy</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cookies are small text files stored on your device when you visit our website.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function. Cannot be disabled.</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our website.</li>
                <li><strong className="text-white">Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes.</li>
                <li><strong className="text-white">Preference Cookies:</strong> Remember your preferences and settings.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use third-party services that may set cookies: Google Analytics, marketing platforms, and social media widgets.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                You can control cookies through browser settings, cookie consent banner on our website, or third-party opt-out tools. Disabling cookies may affect functionality of our Services.
              </p>
            </div>

            {/* AI and Automated Decision-Making */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">15. Artificial Intelligence and Automated Decision-Making</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">AI Processing</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Our Services use AI and machine learning to:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Provide product recommendations</li>
                <li>• Analyze shopping behavior</li>
                <li>• Personalize user experience</li>
                <li>• Improve our algorithms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">Automated Decisions</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We do not make solely automated decisions that produce legal or similarly significant effects without human involvement.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Your Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                You have the right to request human review of automated decisions, express your point of view, and contest automated decisions.
              </p>
            </div>

            {/* Data Breach Notification */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">16. Data Breach Notification</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In the event of a data breach that poses a risk to your rights and freedoms, we will:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Notify affected individuals within 72 hours (or as required by law)</li>
                <li>• Notify relevant supervisory authorities</li>
                <li>• Provide information about the breach and remedial actions</li>
                <li>• Take steps to mitigate harm</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">17. Third-Party Links and Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Business Customer Data */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">18. Business Customer Data</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Customer as Data Controller</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                When you use our Services for your business, you act as the data controller for your customer data. We act as a data processor.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Your Responsibilities</h3>
              <p className="text-gray-300 leading-relaxed mb-4">As data controller, you are responsible for:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Obtaining necessary consents from your customers</li>
                <li>• Providing privacy notices</li>
                <li>• Ensuring lawful processing</li>
                <li>• Responding to data subject requests</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">19. Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Policy periodically. Changes will be effective when posted with a new "Last Updated" date.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Material Changes:</strong> We will notify you of material changes via email notification, prominent notice on our website, or in-app notification.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of Services after changes constitutes acceptance of the updated Policy.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">20. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions, concerns, or requests regarding this Privacy Policy:
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Email:</strong> <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>
                </p>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Mail:</strong> Opura AI, Bengaluru, India
                </p>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Data Protection Inquiries:</strong> <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Response Time:</strong> We aim to respond within 30 days of receipt
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">21. Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Informal Resolution:</strong> We encourage you to contact us first to resolve any concerns.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Arbitration:</strong> Disputes will be resolved through binding arbitration in accordance with our <Link to="/terms" className="text-[hsl(var(--peacock-cyan))] hover:underline">Terms of Service</Link>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Governing Law:</strong> This Policy is governed by the laws of India, without regard to conflict of law principles.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="border-t border-gray-700 pt-8 mt-12">
              <p className="text-center text-gray-400 text-lg mb-6">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY.
              </p>
              <p className="text-center text-gray-500 text-sm italic mb-6">
                This is a comprehensive privacy policy template. It should be reviewed by a qualified attorney licensed in your jurisdiction before implementation, as privacy laws vary by location and are subject to change.
              </p>
              <p className="text-center">
                <Link to="/" className="text-[hsl(var(--peacock-cyan))] hover:underline text-lg">Return to Home</Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;